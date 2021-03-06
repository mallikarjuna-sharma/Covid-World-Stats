import React from 'react';
import Dashboard from './components/dashboard.jsx'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
    Grid, NativeSelect, FormControl, FormGroup,
    InputLabel, withStyles, Button, Typography, FormControlLabel,
    Slide
} from '@material-ui/core';
import stringConstants from '../src/components/stringConstants.jsx'
import { compose } from 'recompose'
import {
    getgraphTypeAction, getSortTypes,
    loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson,
    setSelectedState, loadWorldStats, setXaxisLabel,
    setYaxisLabel, setGraphSlice, setAppMode
} from '../src/components/actions/index.jsx';
import Styles from '../src/components/styles.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Switch from '@material-ui/core/Switch';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../src/components/liveicon.css'

import FavoriteIcon from '@material-ui/icons/Favorite';
import Myimage from './assests/covid.png';


function App(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);

    console.log("env",process.env.NODE_ENV);
    console.log("API_URL",process.env.API_URL);

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: !props.mode ? 'dark' : 'light',
                },
            }),
        [props.mode],
    );

    const handleChange = (event) => {

        setAuth(event.target.checked);
        props.setAppMode(event.target.checked)
    };

    const toggleGraphType = (e, type) => {
        if (type === 'content') {
            props.getSortTypes(e);
            switch (e) {
                case 'india_district': {
                    props.setXaxisLabel('district');
                    props.setYaxisLabel('confirmed')
                    return props.loadIndiaDistrictjson();
                }
                case 'india_state': {
                    props.setXaxisLabel('state');
                    props.setYaxisLabel('confirmed')
                    return props.loadIndiaGeojson();
                }
                case 'world_country': {
                    props.setXaxisLabel('city');
                    props.setYaxisLabel('confirmed')
                    return props.loadCountryjson();
                }
                case 'world_stats': {
                    props.setXaxisLabel('country');
                    props.setYaxisLabel('newcases')
                    return props.loadWorldStats();
                }
                default:
                    return 0;
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid style={{ height: "100%" }}>
                <div >
                    <AppBar position="static"
                        color={"default" }
                    >
                        <Toolbar>
                            <div
                                className="rotating"
                                style={{
                                    width: "30px", height: "30px",paddingRight:"10px",
                                    textAlign: "center"
                                }}
                            >
                                <img
                                    style={{ width: "30px", height: "30px" }}
                                    src={Myimage} />
                            </div>

                            <Typography variant="h5" style={{ fontFamily: "bold" }} className={classes.title} >
                                Covid <span style={{ color: "red" }}>Tracker</span>
                            </Typography>

                            <button className="btn btn1" style={{ borderBottom: props.sortType === 'india_state' ? "1px solid #3498db" : '' }} onClick={e => toggleGraphType('india_state', 'content')}>View All Indian States</button>
                            <button className="btn btn2" style={{ borderBottom: props.sortType === 'india_district' ? "1px solid #3498db" : '' }} onClick={e => toggleGraphType('india_district', 'content')}>View Indian Districts</button>
                            <button className="btn btn1" style={{ borderBottom: props.sortType === 'world_country' ? "1px solid #3498db" : '' }} onClick={e => toggleGraphType('world_country', 'content')}>View States in World Countries</button>
                            <button className="btn btn2" style={{ borderBottom: props.sortType === 'world_stats' ? "1px solid #3498db" : '' }} onClick={e => toggleGraphType('world_stats', 'content')}>Get Stats for World Countries</button>

                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={auth} color={"default"} onChange={e => handleChange(e)} />}
                                    label={auth ? 'Day' : 'Night'}
                                />
                            </FormGroup>
                        </Toolbar>

                    </AppBar>
                </div>
                <Grid item md={12} xs={12}>
                    <Dashboard />
                </Grid>



                <Grid container justify="center" direction="row"  className={classes.foot2} style={{ backgroundColor: props.mode ? "" : "#121212", paddingTop: "4%" }}>

                    <Grid item>
                        <a style={{ color: props.mode ? 'rgba(233, 236, 244, 1.2)' : 'black' }}>
                            made by mallikarjuna sharma in      <FavoriteIcon style={{ height: "20px", padding: "0px" }} /> with React
                </a>
                    </Grid>

                    {/* <Grid item >
                        <img style={{ height: "20px", padding: "0px", opacity: props.mode ? "0.2" : "1" }} src='../src/assests/react_icon.png' />
                    </Grid> */}

                </Grid>


            </Grid>

        </ThemeProvider>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

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
        mode: state.mode
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getgraphTypeAction, getSortTypes,
        loadIndiaGeojson, loadCountryjson, loadIndiaDistrictjson,
        setSelectedState, loadWorldStats, setXaxisLabel, setYaxisLabel,
        setGraphSlice, setAppMode
    }, dispatch)
}


export default compose(withStyles(Styles), connect(mapStateToProps, mapDispatchToProps))(App)
