import React from 'react';
import GenerateTableComponent from './table/table.jsx'
import GenerateGraphComponent from './graph/graph.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getgraphTypeAction, getSortTypes,
    loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson,
    setSelectedState
} from './actions/index.jsx'
import {
    Grid, NativeSelect, FormControl,
    InputLabel, withStyles, TextField
} from '@material-ui/core';
import Styles from './styles.jsx'
import { compose } from 'recompose'
import stringConstants from './stringConstants.jsx'
import getTableData from './table/getTableData.jsx'
import SearchIndiaStates from '../components/search-select/SearchIndiaStates.jsx'
import getGroupedData from '../components/search-select/getGroupedData.jsx'
import SearchCountry from '../components/search-select/SearchCountry.jsx'


class Dashboard extends React.Component {

    constructor(props) {
        super(props)

    }

    toggleGraphType = (e, type) => {

        if (type !== 'content') {
            this.props.getgraphTypeAction(e.target.value)
        }
        else {

            this.props.getSortTypes(e.target.value);

            switch (e.target.value) {
                case 'india_district':
                    return this.props.loadIndiaDistrictjson();
                case 'india_state':
                    return this.props.loadIndiaGeojson();
                case 'world_country':
                    return this.props.loadCountryjson();
                default:
                    return 0;
            }
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
            default:
                return null
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
            default:
                return 0;
        }
    }

    selectedState_Country = (selectedItem) => {

        console.log(selectedItem, "selectedItem");
        this.props.setSelectedState(selectedItem)

        if (this.props.sortType === 'world_country')
            this.props.loadCountryjson(selectedItem)
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid >

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="uncontrolled-native">Graph Type</InputLabel>
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


                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="uncontrolled-native">Select Type</InputLabel>
                    <NativeSelect
                        defaultValue={'line'}
                        onChange={e => this.toggleGraphType(e, 'content')}
                        inputProps={{
                            name: 'name',
                            id: 'uncontrolled-native',
                        }}
                    >
                        {stringConstants.SORT_TYPES.map((e, index) => {
                            return <option value={e.value} key={index}  >{e.label}</option>
                        })}

                    </NativeSelect>
                </FormControl>

                {this.props.sortType === ('india_district') &&
                    <Grid>
                        <SearchIndiaStates
                            items={getGroupedData(this.props.sortType, this.getApiData_Table())}
                            selectedState_india={(item) => this.selectedState_Country(item)}
                        />
                    </Grid>
                }

                {this.props.sortType === ('world_country') &&
                    <Grid>
                        <SearchCountry
                            items={getGroupedData(this.props.sortType, this.getApiData_Table())}
                            selectedCountry={(item) => this.selectedState_Country(item)}
                        />
                    </Grid>
                }

                <Grid>
                    {(this.props.sortType || this.props.selectedState) && <GenerateTableComponent
                        columns={this.getColForTable()}
                        tableData={
                            getTableData(
                                this.props.sortType,
                                this.getApiData_Table(),
                                this.props.selectedState)
                        }
                        {...this.state} />}
                </Grid>

                <Grid>
                    <GenerateGraphComponent
                        {...this.state}
                    />
                </Grid>

            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        getindiageojson: state.getindiageojson,
        getIndiaDistrictjson: state.getIndiaDistrictjson,
        getCountryjson: state.getCountryjson,
        sortType: state.sortType,
        selectedState: state.selectedState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getgraphTypeAction, getSortTypes,
        loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson,
        setSelectedState
    }, dispatch)
}

export default compose(withStyles(Styles), connect(mapStateToProps, mapDispatchToProps))(Dashboard)
