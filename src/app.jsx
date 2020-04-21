import React from 'react';
import GenerateTableComponent from './components/table/table.jsx'
import GenerateGraphComponent from './components/graph/graph.jsx'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getgraphTypeAction, getSortTypes,
    loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson
} from './components/actions/index.jsx'

import {
    Grid, NativeSelect, FormControl,
    InputLabel, withStyles
} from '@material-ui/core';

import Styles from './components/styles.jsx'
import { compose } from 'recompose'

import stringConstants from './components/stringConstants.jsx'

class App extends React.Component {

    constructor(props) {
        super(props)

    }

    toggleGraphType = (e, type) => {

        if (type !== 'content') {
            this.props.getgraphTypeAction(e.target.value)
        }
        else {

            this.props.getSortTypes(e.target.value);

            if (e.target.value === 'india_state') {
                this.props.loadIndiaGeojson();
            }
            else {
                this.props.loadIndiaDistrictjson();
            }

        }
        // this.props.loadCountryjson('Sri Lanka');

    }

    getRowForTable = () => {

        switch (this.props.sortType) {
            case 'india_district':
                return stringConstants.INDIA_DISTRICT_JSON_ROWS
            case 'india_state':
                return stringConstants.INDIA_GEO_JSON_ROWS
            default:
                return null
        }

    }

    getColForTable = () => {

        switch (this.props.sortType) {
            case 'india_district':
                return stringConstants.INDIA_DISTRICT_JSON_COLUMNS
            case 'india_state':
                return stringConstants.INDIA_GEO_JSON_COLUMNS
            default:
                return null
        }

    }


    getDataForTable = () => {

        switch (this.props.sortType) {
            case 'india_district':
                return this.props.getIndiaDistrictjson
            case 'india_state':
                return this.props.getindiageojson
            default:
                return null
        }

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

                <Grid>
                    {this.props.sortType && <GenerateTableComponent
                        columns={this.getColForTable()}
                        rows={this.getRowForTable()}
                        tableData={this.getDataForTable()}

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
        sortType: state.sortType
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getgraphTypeAction, getSortTypes,
        loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson
    }, dispatch)
}

export default compose(withStyles(Styles), connect(mapStateToProps, mapDispatchToProps))(App)
