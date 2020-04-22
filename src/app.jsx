import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getgraphTypeAction, getSortTypes,
    loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson
} from './components/actions/index.jsx'

import {
    Grid, withStyles
} from '@material-ui/core';

import Styles from './components/styles.jsx'
import { compose } from 'recompose'

import stringConstants from './components/stringConstants.jsx'

import Dashboard from './components/dashboard.jsx'

class App extends React.Component {

    render() {
        return (
            <Grid >
                <Dashboard />
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
