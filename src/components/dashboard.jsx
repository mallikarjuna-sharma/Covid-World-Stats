import React from 'react';
import GenerateTableComponent from './table/table.jsx'
import GenerateGraphComponent from './graph/graph.jsx'
import GeneratePieComponent from './graph/piegraph.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getgraphTypeAction, getSortTypes,
    loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson,
    setSelectedState, loadWorldStats, setXaxisLabel,
    setYaxisLabel, setGraphSlice, setTableData, setSelectedCountry
} from './actions/index.jsx'
import {
    Grid, NativeSelect, FormControl,
    InputLabel, withStyles, Button, Typography,
} from '@material-ui/core';
import Styles from './styles.jsx'
import { compose } from 'recompose'
import stringConstants from './stringConstants.jsx'
import getTableData from './table/getTableData.jsx'
import getGroupedData from '../components/search-select/getGroupedData.jsx'
import { getXaxisLabels, getYaxisLabels } from '../components/graph/getAxisLabels.jsx'
import DisplayBoard from './displayBoard.jsx'
import ToggleButton from '@material-ui/lab/ToggleButton';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import MyButton from './MyButton.jsx'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)

    }

    toggleGraphType = (e, type) => {

        if (type === 'graph') {
            this.props.getgraphTypeAction(e.target.value)
        }
        else if (type === 'content') {
            this.props.getSortTypes(e.target.value);
            switch (e.target.value) {
                case 'india_district': {
                    this.props.setXaxisLabel('district');
                    this.props.setYaxisLabel('confirmed')
                    return this.props.loadIndiaDistrictjson();
                }
                case 'india_state': {
                    this.props.setXaxisLabel('state');
                    this.props.setYaxisLabel('confirmed')
                    return this.props.loadIndiaGeojson();
                }
                case 'world_country': {
                    this.props.setXaxisLabel('city');
                    this.props.setYaxisLabel('confirmed')
                    return this.props.loadCountryjson();
                }
                case 'world_stats': {
                    this.props.setXaxisLabel('country');
                    this.props.setYaxisLabel('newcases')
                    return this.props.loadWorldStats();
                }
                default:
                    return 0;
            }
        }
        else if (type === 'xlabel') {
            this.props.setXaxisLabel(e.target.value)
        }
        else if (type === 'ylabel') {
            this.props.setYaxisLabel(e.target.value)
        }
    }

    getColForTable = () => {

        switch (this.props.sortType) {
            case 'india_district':
                return stringConstants.INDIA_DISTRICT_JSON_COLUMNS;
            case 'india_state':
                return stringConstants.INDIA_GEO_JSON_COLUMNS;
            case 'world_country':
                return stringConstants.WORLD_JSON_COLUMNS;
            case 'world_stats':
                return stringConstants.WORLD_COUNTRY_STATS_COLUMNS;
            default:
                return null
        }

    }

    componentWillMount() {
        this.props.setTableData(getTableData(
            this.props.sortType,
            this.getApiData_Table(),
            false,
        ))
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.getindiageojson !== this.props.getindiageojson) ||
            (prevProps.getIndiaDistrictjson !== this.props.getIndiaDistrictjson) ||
            (prevProps.getCountryjson !== this.props.getCountryjson) ||
            (prevProps.sortType !== this.props.sortType) ||
            (prevProps.selectedState !== this.props.selectedState) ||
            (prevProps.getWorldStats !== this.props.getWorldStats) ||
            (prevProps.selectedCountry !== this.props.selectedCountry)) {
            const tabData = getTableData(
                this.props.sortType,
                this.getApiData_Table(),
                !(this.props.sortType === 'india_state') ? this.props.selectedState : false,
                !(this.props.sortType === 'world_stats') ? this.props.selectedCountry : false,
            );
            console.log(tabData, 'tabData')
            if (tabData && tabData.length) this.props.setTableData(tabData)
        }

        if (prevProps.sortType !== this.props.sortType) {
            this.props.setGraphSlice(0);
        }


    }

    getApiData_Table = () => {

        switch (this.props.sortType) {
            case 'india_district':
                return this.props.getIndiaDistrictjson;
            case 'india_state':
                return this.props.getindiageojson;
            case 'world_country':
                return this.props.getCountryjson;
            case 'world_stats':
                return this.props.getWorldStats;
            default:
                return 0;
        }
    }

    selectedState_Country = (selectedItem) => {
        if (this.props.sortType === 'world_country') {
            this.props.setSelectedCountry(selectedItem)
            this.props.loadCountryjson(selectedItem)
        }
        else {
            this.props.setSelectedState(selectedItem)
        }
    }

    sliceGraphData = (type) => {
        if (type === 'next') {
            let arr = this.props.tableData
            let count = this.props.graphStart + 1;
            if (!(count * 30 > arr.length))
                this.props.setGraphSlice(count)
        }
        else if (type === 'previous') {
            let count = this.props.graphStart - 1;
            if (count >= 0)
                this.props.setGraphSlice(count)
        }
    }

    getHeadData = () => {

        switch (this.props.sortType) {
            case 'india_district': {
                const tabData = getTableData(
                    "india_state",
                    this.props.getindiageojson,
                    this.props.selectedState,
                    false)
                return tabData;
            }
            case 'india_state': {
                const tabData = getTableData(
                    'world_stats',
                    this.props.getWorldStats,
                    false,
                    'India')
                return tabData;
            }

            case 'world_country': {

                const tabData = getTableData(
                    'world_stats',
                    this.props.getWorldStats,
                    false,
                    this.props.selectedCountry)
                return tabData;
            }

            case 'world_stats': {
                const tabData = getTableData(
                    this.props.sortType,
                    this.getApiData_Table(),
                    false,
                    'All')
                return tabData;
            }
            default:
                return null
        }



    }

    render() {
        const { classes, mode } = this.props;
        return (

            <div className={mode ? '' : classes.root} >
                <Grid container spacing={8} style={{ height: "100%" }} >

                    <Grid item md={12} xs={12}>
                        <DisplayBoard
                            mode={this.props.mode}
                            tableData={this.getHeadData()}
                            sortType={this.props.sortType}
                            items={getGroupedData(this.props.sortType, this.getApiData_Table())}
                            selectedState_Country={(item) => this.selectedState_Country(item)}
                        />

                    </Grid>


                    <Grid item md={12} xs={12}  >
                        {(this.props.sortType || this.props.selectedState) && <Grid container style={{ padding: "1%" }}>
                            <GenerateTableComponent
                                mode={this.props.mode}
                                columns={this.getColForTable()}
                                tableData={this.props.tableData}
                            />
                        </Grid>}
                    </Grid>

                    <Grid item>

                        <Grid container>

                            <Grid md={3} xs={3} item>

                                <FormControl className={classes.formControlGraph}>
                                    <InputLabel htmlFor="uncontrolled-native">X Axis</InputLabel>
                                    <NativeSelect
                                        variant="outlined"

                                        defaultValue={'line'}
                                        onChange={(e) => this.toggleGraphType(e, 'xlabel')}
                                        inputProps={{
                                            name: 'name',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        {getXaxisLabels(this.props.sortType).map((e, index) => {
                                            return <option value={e.value} key={index}>{e.label}</option>
                                        })}
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid md={3} xs={3} item>

                                <FormControl className={classes.formControlGraph}>
                                    <InputLabel htmlFor="uncontrolled-native"> Y Axis </InputLabel>
                                    <NativeSelect
                                        variant="outlined"

                                        defaultValue={'line'}
                                        onChange={(e) => this.toggleGraphType(e, 'ylabel')}
                                        inputProps={{
                                            name: 'name',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        {getYaxisLabels(this.props.sortType).map((e, index) => {
                                            return <option value={e.value} key={index} >{e.label}</option>
                                        })}
                                    </NativeSelect>
                                </FormControl>

                            </Grid>

                            <Grid md={3} xs={3} item>

                                <FormControl className={classes.formControlGraph}>
                                    <InputLabel htmlFor="uncontrolled-native"> Graph Type </InputLabel>
                                    <NativeSelect
                                        defaultValue={'line'}
                                        variant="outlined"
                                        onChange={e => this.toggleGraphType(e, 'graph')}
                                        inputProps={{
                                            name: 'name',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        {stringConstants.GRAPHTYPES.map((e, index) => {
                                            return <option value={e.value} key={index}  >{e.label}</option>
                                        })}
                                    </NativeSelect>
                                </FormControl>

                            </Grid>

                            {(this.props.graphType === 'pie' ||
                                this.props.graphType === 'doughnut') && <Grid md={3} xs={3} item >

                                    <FormControl className={classes.formControlGraph}>
                                        <ToggleButton

                                            value="check"
                                            selected={false}
                                            onChange={() => {
                                                if (this.props.graphType === 'pie')
                                                    this.props.getgraphTypeAction('doughnut')
                                                else
                                                    this.props.getgraphTypeAction('pie')
                                            }}
                                        >
                                            {this.props.graphType === 'pie' ?
                                                <DonutLargeIcon color={'secondary'} /> :
                                                <RadioButtonUncheckedIcon color={'secondary'} />
                                            }
                                            <span style={{
                                                background: 'linear-gradient(to right, #430089, #82ffa1)',
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent"
                                            }}> Toggle View </span>
                                        </ToggleButton>


                                    </FormControl>
                                </Grid>}

                        </Grid>

                    </Grid >
                </Grid>

                <Grid container spacing={2}>

                    <Grid item md={6} xs={6} alignContent="center" justify="center">
                        <MyButton className={classes.graphButton}
                            onClick={e => { this.sliceGraphData('previous') }}
                            style={{
                                marginLeft: "80%", background: 'linear-gradient(to right, #430089, #82ffa1)',
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                            <ArrowBackIcon color="primary" />
                                Previous
                             </MyButton>
                    </Grid>

                    <Grid item md={6} xs={6} >
                        <MyButton
                            style={{
                                background: 'linear-gradient(to right, #430089, #82ffa1)',
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                            className={classes.graphButton}
                            onClick={e => { this.sliceGraphData('next') }}>
                            Next  <ArrowForwardIcon color="primary" />
                        </MyButton>
                    </Grid>

                </Grid>

                {(this.props.graphType === 'pie' ||
                    this.props.graphType === 'doughnut') &&
                    <GeneratePieComponent
                        count={this.props.graphStart}
                        graphData={this.props.tableData}
                    />
                }
                {(this.props.graphType === 'line' ||
                    this.props.graphType === 'bar')
                    &&
                    <GenerateGraphComponent
                        count={this.props.graphStart}
                        graphData={this.props.tableData}
                    />
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        getindiageojson: state.getindiageojson,
        getIndiaDistrictjson: state.getIndiaDistrictjson,
        getCountryjson: state.getCountryjson,
        sortType: state.sortType,
        selectedState: state.selectedState,
        getWorldStats: state.getWorldStats,
        xAxisLabel: state.xAxisLabel,
        yAxisLabel: state.yAxisLabel,
        graphType: state.graphType,
        graphStart: state.graphStart,
        tableData: state.tableData,
        selectedCountry: state.selectedCountry,
        mode: state.mode
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getgraphTypeAction, getSortTypes,
        loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson,
        setSelectedState, loadWorldStats, setXaxisLabel, setYaxisLabel,
        setGraphSlice, setTableData, setSelectedCountry
    }, dispatch)
}



export default compose(withStyles(Styles), connect(mapStateToProps, mapDispatchToProps))(Dashboard)
