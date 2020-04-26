
import React, { useEffect } from 'react';
import {
    Grid, NativeSelect, FormControl, Box,
    InputLabel, withStyles, Button, Paper, Typography
} from '@material-ui/core';
import './liveicon.css'
import SearchIndiaStates from '../components/search-select/SearchIndiaStates.jsx'
import SearchCountry from '../components/search-select/SearchCountry.jsx'
import stringConstants from './stringConstants.jsx'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function DisplayBoard(props) {

    useEffect(() => {  }, [props]);

    const { sortType, tableData, items, selectedState_Country, fromTable } = props

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: !props.mode ? 'dark' : 'light',
                },
            }),
        [props.mode],
    );

    function FocusComponent() {

        return <Paper style={{
            height: "80%",
            width: "15%",
            padding: 0,
            marginLeft: '2%',
            borderRadius: "5px",
            boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12),0 3px 5px -1px rgba(0, 0, 0, 0.4)",
        }}>

            <Grid item md={12} xs={12} style={{
                width: '100%',
                backgroundColor: "rgb(230,230,250,0.1)",
                height: (sortType === ('india_district') || sortType === 'world_country') ? "60%" : "80%",
                padding: 0,
            }} >

                <div className="video__icon">
                    <div className="circle--inner"></div>
                </div>


                <Typography style={{ paddingTop: "20%", fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>
                    {getCardsData(true)}
                </Typography>
            </Grid>

            {(sortType === ('india_district') || sortType === 'world_country') && <Grid item md={12} xs={12} style={{
                width: '100%',
                height: "40%",
                padding: 0
            }}>

                {sortType === ('india_district') &&
                    <Grid item  >
                        <SearchIndiaStates
                            items={items}
                            selectedState_india={(item) => selectedState_Country(item)}
                        />
                    </Grid>
                }
                {
                    sortType === ('world_country') &&
                    <Grid item  >
                        <SearchCountry
                            items={items}
                            selectedCountry={(item) => selectedState_Country(item)}
                        />
                    </Grid>
                }
            </Grid>}
        </Paper>
    }


    function getCardsData(focus) {
        let designCards = [];

        switch (sortType) {
            case 'india_district': {

                if (tableData && tableData.length) {

                    if (focus)
                        return tableData[0].state


                    let obj1 = { label: "Confirmed", value: tableData[0].confirmed, headerColors: (props.mode) ? 'rgb(255,192,203,0.5)' : 'rgb(255,192,203,0.9)', headerBottom: 'rgb(255,192,203,0.9)', width: "18%" }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors: (props.mode) ? stringConstants.ACTIVE_CARD_HEADER : stringConstants.ACTIVE_CARD_FOOTER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER, width: "18%" }
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: (props.mode) ? stringConstants.RECOVERED_CARD_HEADER : stringConstants.RECOVERED_CARD_FOOTER, headerBottom: stringConstants.RECOVERED_CARD_FOOTER, width: "18%" }
                    let obj4 = { label: "Deaths", value: tableData[0].deaths, headerColors: (props.mode) ? stringConstants.DEATH_CARD_HEADER : stringConstants.DEATH_CARD_FOOTER, headerBottom: stringConstants.DEATH_CARD_FOOTER, width: "18%" }

                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);

                }
                return designCards;


            }
            case 'india_state': {

                if (tableData && tableData.length) {

                    if (focus)
                        return "India"

                    let obj1 = { label: "New", value: tableData[0].newcases, headerColors: (props.mode) ? stringConstants.NEW_CARD_HEADER : stringConstants.NEW_CARD_FOOTER, headerBottom: stringConstants.NEW_CARD_FOOTER, width: "14%" }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors: (props.mode) ? stringConstants.ACTIVE_CARD_HEADER : stringConstants.ACTIVE_CARD_FOOTER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER, width: "14%" }
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: (props.mode) ? stringConstants.RECOVERED_CARD_HEADER : stringConstants.RECOVERED_CARD_FOOTER, headerBottom: stringConstants.RECOVERED_CARD_FOOTER, width: "14%" }
                    let obj4 = { label: "Deaths", value: tableData[0].deaths, headerColors: (props.mode) ? stringConstants.DEATH_CARD_HEADER : stringConstants.DEATH_CARD_FOOTER, headerBottom: stringConstants.DEATH_CARD_FOOTER, width: "14%" }
                    let obj5 = { label: "Total", value: tableData[0].total, headerColors: (props.mode) ? stringConstants.TOTAL_CARD_HEADER : stringConstants.TOTAL_CARD_FOOTER, headerBottom: stringConstants.TOTAL_CARD_FOOTER, width: "14%" }

                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);
                    designCards.push(obj5);

                }

                return designCards;

            }
            case 'world_country': {

                if (tableData && tableData.length) {

                    if (focus)
                        return tableData[0].country

                    let obj1 = { label: "New", value: tableData[0].newcases, headerColors: (props.mode) ? stringConstants.NEW_CARD_HEADER : stringConstants.NEW_CARD_FOOTER, headerBottom: stringConstants.NEW_CARD_FOOTER, width: "12%" }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors: (props.mode) ? stringConstants.ACTIVE_CARD_HEADER : stringConstants.ACTIVE_CARD_FOOTER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER, width: "12%" }
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: (props.mode) ? stringConstants.RECOVERED_CARD_HEADER : stringConstants.RECOVERED_CARD_FOOTER, headerBottom: stringConstants.RECOVERED_CARD_FOOTER, width: "12%" }
                    let obj4 = { label: "Total", value: tableData[0].total, headerColors: (props.mode) ? stringConstants.TOTAL_CARD_HEADER : stringConstants.TOTAL_CARD_FOOTER, headerBottom: stringConstants.TOTAL_CARD_FOOTER, width: "12%" }
                    let obj5 = { label: "Deaths", value: tableData[0].deaths, headerColors: (props.mode) ? stringConstants.DEATH_CARD_HEADER : stringConstants.DEATH_CARD_FOOTER, headerBottom: stringConstants.DEATH_CARD_FOOTER, width: "12%" }

                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);
                    designCards.push(obj5);
                }
                else if (fromTable && fromTable.length) {

                    if (focus)
                        return fromTable[0].city

                    let obj1 = { label: "Confirmed", value: fromTable[0].confirmed, headerColors: (props.mode) ? 'rgb(255,192,203,0.5)' : 'rgb(255,192,203,0.9)', headerBottom: 'rgb(255,192,203,0.9)', width: "18%" }
                    let obj2 = { label: "Recovered", value: fromTable[0].recovered, headerColors: (props.mode) ? stringConstants.RECOVERED_CARD_HEADER : stringConstants.RECOVERED_CARD_FOOTER, headerBottom: stringConstants.RECOVERED_CARD_FOOTER, width: "12%" }
                    let obj3 = { label: "Deaths", value: fromTable[0].deaths, headerColors: (props.mode) ? stringConstants.DEATH_CARD_HEADER : stringConstants.DEATH_CARD_FOOTER, headerBottom: stringConstants.DEATH_CARD_FOOTER, width: "12%" }

                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);

                }
                return designCards;
            }
            case 'world_stats': {

                if (tableData && tableData.length) {

                    if (focus)
                        return "World Stats"

                    let obj1 = { label: "New", value: tableData[0].newcases, headerColors: (props.mode) ? stringConstants.NEW_CARD_HEADER : stringConstants.NEW_CARD_FOOTER, headerBottom: stringConstants.NEW_CARD_FOOTER, width: "12%" }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors: (props.mode) ? stringConstants.ACTIVE_CARD_HEADER : stringConstants.ACTIVE_CARD_FOOTER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER, width: "12%" }
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: (props.mode) ? stringConstants.RECOVERED_CARD_HEADER : stringConstants.RECOVERED_CARD_FOOTER, headerBottom: stringConstants.RECOVERED_CARD_FOOTER, width: "12%" }
                    let obj4 = { label: "Deaths", value: tableData[0].deaths, headerColors: (props.mode) ? stringConstants.DEATH_CARD_HEADER : stringConstants.DEATH_CARD_FOOTER, headerBottom: stringConstants.DEATH_CARD_FOOTER, width: "12%" }
                    let obj5 = { label: "Total", value: tableData[0].total, headerColors: (props.mode) ? stringConstants.TOTAL_CARD_HEADER : stringConstants.TOTAL_CARD_FOOTER, headerBottom: stringConstants.TOTAL_CARD_FOOTER, width: "12%" }


                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);
                    designCards.push(obj5);

                }
                return designCards;

            }
            default:
                return [];
        }

    }

    return (

        <ThemeProvider theme={theme}>

            <Paper style={{
                height: "100%",
                width: "96%",
                borderRadius: "10px",
                padding: '1%',
                margin: "1%",
                boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12),0 3px 5px -1px rgba(0, 0, 0, 0.4)",
            }}>

                <Grid container direction="row" justify="center" alignItems="center" alignContent="center" style={{
                    width: '99%',
                    height: '200px',
                    borderRadius: "10px",
                    borderRadius: "10px",
                }} >


                    <FocusComponent />


                    {getCardsData().map(e => {

                        return <Paper style={{
                            height: "80%",
                            width: e.width,
                            padding: 0,
                            marginLeft: '2%',
                            borderRadius: "5px",
                            boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12),0 3px 5px -1px rgba(0, 0, 0, 0.4)",

                        }}>

                            <Grid item md={12} xs={12} style={{
                                width: '100%',
                                backgroundColor: e.headerColors,
                                height: "80%",
                                padding: 0,
                            }} >
                                <Typography style={{ paddingTop: "20%", fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>
                                    {e.value}
                                </Typography>
                            </Grid>

                            <Grid item md={12} xs={12} style={{
                                width: '100%',
                                height: "20%",
                                backgroundColor: e.headerBottom,
                                padding: 0
                            }}>

                                <Typography style={{ fontWeight: "bold", fontSize: "15px", textAlign: "center" }}>
                                    {e.label}
                                </Typography>

                            </Grid>

                        </Paper>

                    })}


                </Grid>

            </Paper>
        </ThemeProvider>
    );
}