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
    InputLabel, withStyles, Button, 
} from '@material-ui/core';
import Styles from './styles.jsx'
import { compose } from 'recompose'
import stringConstants from './stringConstants.jsx'
import getTableData from './table/getTableData.jsx'
import SearchIndiaStates from '../components/search-select/SearchIndiaStates.jsx'
import getGroupedData from '../components/search-select/getGroupedData.jsx'
import SearchCountry from '../components/search-select/SearchCountry.jsx'
import { getXaxisLabels, getYaxisLabels } from '../components/graph/getAxisLabels.jsx'
import DisplayBoard from './displayBoard.jsx'


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
            this.props.selectedState,
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
                this.props.selectedState,
                this.props.selectedCountry);
                if(tabData && tabData.length ) this.props.setTableData(tabData)
        }
        console.log(this.props,"componentDidUpdate")
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
        if (this.props.sortType === 'world_country'){
            this.props.setSelectedCountry(selectedItem)
            this.props.loadCountryjson(selectedItem)
        }
        else{
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
            case 'india_district':{
                const tabData = getTableData(
                    "india_state",
                    this.props.getindiageojson,
                    this.props.selectedState,
                    false)
                    console.log(tabData,"tabData")
                    return tabData;
            }
            case 'india_state':{
                const tabData = getTableData(
                    'world_stats',
                    this.props.getWorldStats,
                    false,
                    'India')
                    return tabData;
            }
               
            case 'world_country':{

                const tabData = getTableData(
                    'world_stats',
                    this.props.getWorldStats,
                    false,
                    this.props.selectedCountry)
                    return tabData;
            }
              
            case 'world_stats':{
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
        const { classes } = this.props;
        return (
            <Grid container spacing={8} >

                <DisplayBoard  
                    tableData = {this.getHeadData()}
                />

                {this.props.sortType === ('india_district') &&
                    <Grid item md={12} xs={12} >
                        <SearchIndiaStates
                            items={getGroupedData(this.props.sortType, this.getApiData_Table())}
                            selectedState_india={(item) => this.selectedState_Country(item)}
                        />
                    </Grid>
                }

                {
                    this.props.sortType === ('world_country') &&
                    <Grid item item md={12} xs={12} >
                        <SearchCountry
                            items={getGroupedData(this.props.sortType, this.getApiData_Table())}
                            selectedCountry={(item) => this.selectedState_Country(item)}
                        />
                    </Grid>
                }

                <Grid item md={12} xs={12}  >
                    {(this.props.sortType || this.props.selectedState) &&
                        <GenerateTableComponent
                            columns={this.getColForTable()}
                            tableData={this.props.tableData }
                            {...this.state} />}
                </Grid>

                <Grid item>

                    <Grid container>

                        <Grid md={4} xs={4} item>

                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="uncontrolled-native">X Axis</InputLabel>
                                <NativeSelect
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
                        <Grid md={4} xs={4} item>

                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="uncontrolled-native"> Y Axis </InputLabel>
                                <NativeSelect
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

                        <Grid md={4} xs={4} item>

                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="uncontrolled-native"> Graph Type </InputLabel>
                                <NativeSelect
                                    defaultValue={'line'}
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
                            this.props.graphType === 'doughnut') && <Grid md={4} xs={4} item>

                                <Button onClick={e => {
                                    if (this.props.graphType === 'pie')
                                        this.props.getgraphTypeAction('doughnut')
                                    else
                                        this.props.getgraphTypeAction('pie')
                                }}> Toggle Doughnut View</Button>

                            </Grid>}

                    </Grid>
                    <Grid item md={12} xs={12} >
                        <Button onClick={e => { this.sliceGraphData('next') }}>
                            Load more Data
                    </Button>
                        <Button onClick={e => { this.sliceGraphData('previous') }}>
                            Load previous Data
                    </Button>
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
                </Grid>

            </Grid >
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
        selectedCountry: state.selectedCountry
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
