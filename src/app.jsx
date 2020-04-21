import React from 'react';
import GenerateTableComponent from './components/table/table.jsx'
import GenerateGraphComponent from './components/graph/graph.jsx'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getgraphTypeAction,
        loadIndiaGeojson,loadCountryjson , loadIndiaDistrictjson } from './components/actions/index.jsx'

import { Button, Grid, NativeSelect, Select, FormControl, FormHelperText, InputLabel, withStyles } from '@material-ui/core';

import Styles from './components/styles.jsx'
import { compose } from 'recompose'

import stringConstants from './components/stringConstants.jsx'

class App extends React.Component {

    constructor(props) {
        super(props)

    }

    toggleGraphType = (e) => {
        this.props.loadIndiaGeojson();
        this.props.loadIndiaDistrictjson();
        this.props.loadCountryjson('Sri Lanka');
        this.props.getgraphTypeAction(e.target.value)
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid >

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="uncontrolled-native">Graph Type</InputLabel>
                    <NativeSelect
                        defaultValue={'line'}
                        onChange={e => this.toggleGraphType(e)}
                        inputProps={{
                            name: 'name',
                            id: 'uncontrolled-native',
                        }}
                    >

                        {stringConstants.GRAPHTYPES.map((e,index) => {
                            return <option value={e.value} key={index}  >{e.label}</option>
                        })}

                    </NativeSelect>
                </FormControl>


                <Grid>
                    <GenerateTableComponent {...this.state} />
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
        num: state.num,
        graphType: state.graphType,
        searchedText: state.searchedText,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  getgraphTypeAction ,
          loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson}, dispatch)
}

export default compose(withStyles(Styles), connect(mapStateToProps, mapDispatchToProps))(App)
