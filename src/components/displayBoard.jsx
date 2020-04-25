
import React, { useEffect } from 'react';
import {
    Grid, NativeSelect, FormControl, Box,
    InputLabel, withStyles, Button, Paper, Typography
} from '@material-ui/core';
import './liveicon.css'
import SearchIndiaStates from '../components/search-select/SearchIndiaStates.jsx'
import SearchCountry from '../components/search-select/SearchCountry.jsx'

import stringConstants from './stringConstants.jsx'


export default function DisplayBoard(props) {

    useEffect(() => { console.log(props, 'props'); getCardsData() }, [props]);

    const { sortType, tableData,items,selectedState_Country } = props


    function FocusComponent() {

        return <Paper style={{
            height: "80%",
            width: "15%",
            padding: 0,
            marginLeft: '2%'
        }}>

            <Grid item md={12} xs={12} style={{
                width: '100%',
                backgroundColor: "rgb(230,230,250,0.1)",
                height: "80%",
                padding: 0,
            }} >
    
                <div class="video__icon">
                    <div class="circle--inner"></div>     <div >LIVE</div>
                </div>
           

                <Typography style={{ paddingTop: "20%", fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>
                    {getCardsData(true)}
                </Typography>
            </Grid>

            <Grid item md={12} xs={12} style={{
                width: '100%',
                height: "20%",
                padding: 0
            }}>

{sortType === ('india_district') &&
                    <Grid item md={12} xs={12} >
                        <SearchIndiaStates
                            items={items}
                            selectedState_india={(item) => selectedState_Country(item)}
                        />
                    </Grid>
                }

                {
                   sortType === ('world_country') &&
                    <Grid item item md={12} xs={12} >
                        <SearchCountry
                            items={items}
                            selectedCountry={(item) => selectedState_Country(item)}
                        />
                    </Grid>
                }


            </Grid>

        </Paper>


    }


    function getCardsData(focus) {
        let designCards = [];

        switch (sortType) {
            case 'india_district': {

                if (tableData.length) {

                    if (focus)
                        return tableData[0].state


                    let obj1 = { label: "Confirmed", value: tableData[0].confirmed, headerColors: 'rgb(255,192,203,0.5)', headerBottom: 'rgb(255,192,203,0.9)',width:"18%" }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors:stringConstants.ACTIVE_CARD_HEADER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER  ,width:"18%"  }
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: stringConstants.RECOVERED_CARD_HEADER , headerBottom: stringConstants.RECOVERED_CARD_FOOTER,width:"18%"  }
                    let obj4 = { label: "Deaths", value: tableData[0].deaths, headerColors: stringConstants.DEATH_CARD_HEADER, headerBottom: stringConstants.DEATH_CARD_FOOTER,width:"18%"  }

                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);

                }
                console.log(designCards, 'props')
                return designCards;


            }
            case 'india_state': {

                if (tableData.length) {

                    if (focus)
                        return "India"

                    let obj1 = { label: "New", value: tableData[0].newcases, headerColors: stringConstants.NEW_CARD_HEADER, headerBottom: stringConstants.NEW_CARD_FOOTER   ,width:"14%"  }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors:stringConstants.ACTIVE_CARD_HEADER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER  ,width:"14%"  }
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: stringConstants.RECOVERED_CARD_HEADER , headerBottom: stringConstants.RECOVERED_CARD_FOOTER,width:"14%"  }
                    let obj4 = { label: "Deaths", value: tableData[0].deaths, headerColors: stringConstants.DEATH_CARD_HEADER, headerBottom: stringConstants.DEATH_CARD_FOOTER,width:"14%"  }
                    let obj5 = { label: "Total", value: tableData[0].total, headerColors: stringConstants.TOTAL_CARD_HEADER, headerBottom: stringConstants.TOTAL_CARD_FOOTER ,width:"14%"  }

                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);
                    designCards.push(obj5);

                    console.log(designCards, 'props')

                }

                return designCards;

            }
            case 'world_country': {

                if (tableData.length) {

                    if (focus)
                        return tableData[0].country

                    let obj1 = { label: "New", value: tableData[0].newcases, headerColors: stringConstants.NEW_CARD_HEADER, headerBottom: stringConstants.NEW_CARD_FOOTER ,width:"12%"  }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors: stringConstants.ACTIVE_CARD_HEADER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER  ,width:"12%"  }
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: stringConstants.RECOVERED_CARD_HEADER , headerBottom: stringConstants.RECOVERED_CARD_FOOTER,width:"12%"  }
                    let obj4 = { label: "Total", value: tableData[0].total, headerColors:  stringConstants.TOTAL_CARD_HEADER, headerBottom: stringConstants.TOTAL_CARD_FOOTER ,width:"12%"  }
                    let obj5 = { label: "Deaths", value: tableData[0].deaths, headerColors: stringConstants.DEATH_CARD_HEADER, headerBottom: stringConstants.DEATH_CARD_FOOTER,width:"12%"  }

                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);
                    designCards.push(obj5);



                }

                return designCards;

            }
            case 'world_stats': {


                if (tableData.length) {

                    if (focus)
                        return "World Stats"

                    let obj1 = { label: "New", value: tableData[0].newcases, headerColors: stringConstants.NEW_CARD_HEADER, headerBottom: stringConstants.NEW_CARD_FOOTER,width:"12%" }
                    let obj2 = { label: "Active", value: tableData[0].active, headerColors: stringConstants.ACTIVE_CARD_HEADER, headerBottom: stringConstants.ACTIVE_CARD_FOOTER ,width:"12%"}
                    let obj3 = { label: "Recovered", value: tableData[0].recovered, headerColors: stringConstants.RECOVERED_CARD_HEADER , headerBottom: stringConstants.RECOVERED_CARD_FOOTER ,width:"12%" }
                    let obj4 = { label: "Deaths", value: tableData[0].deaths, headerColors:stringConstants.DEATH_CARD_HEADER, headerBottom: stringConstants.DEATH_CARD_FOOTER,width:"12%" }
                    let obj5 = { label: "Total", value: tableData[0].total, headerColors:  stringConstants.TOTAL_CARD_HEADER, headerBottom: stringConstants.TOTAL_CARD_FOOTER ,width:"12%"}


                    designCards.push(obj1);
                    designCards.push(obj2);
                    designCards.push(obj3);
                    designCards.push(obj4);
                    designCards.push(obj5);

                }
                console.log(designCards, 'props')
                return designCards;

            }
            default:
                return [];
        }

    }

    return (

        <Paper style={{
            height: "100%",
            width: "99%"
        }}>

            <Grid container direction="row" style={{
                width: '99%',
                height: '200px',
                padding: '1%',
                margin: "1%",
            }} >


                <FocusComponent />


                {getCardsData().map(e => {

                    return <Paper style={{
                        height: "80%",
                        width: e.width,
                        padding: 0,
                        marginLeft: '2%'
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

    );
}