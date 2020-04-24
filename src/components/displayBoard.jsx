
import React, { useEffect } from 'react';
import {
    Grid, NativeSelect, FormControl, Box,
    InputLabel, withStyles, Button, Paper, Typography
} from '@material-ui/core';

export default function DisplayBoard(props){

    useEffect(()=>  console.log(props),[props])
   
    return (
        <Grid item md={12} xs={12} spacing={10} style={{
            "border": "2px solid ",
            backgroundColor: 'transparent',
            width: '80%',
            height: '200px',
            paddingBottom: '2%',
            margin: "2%",
            textShadow: "1px 1px 2px black, 0 0 2px blue, 0 0 5px darkblue",
            boxShadow: "5px 5px rgb(220,220,220,.5)"
        }} >

            <Grid container direction="row" spacing={10} style={{ width: "100%", height: "100%", padding: 0 }}>

                {[1, 2, 3].map(e => {

                    return <Grid item md={3} xs={3} style={{
                        "border": "2px solid red",
                        height: "100%",
                        width: "20%",
                        padding: 0,
                        marginLeft: "2%"
                    }}>

                        <Grid item md={12} xs={12} style={{
                            width: '100%',
                            backgroundColor: 'rgb(240,128,128,0.2)',
                            height: "80%",
                            padding: 0
                        }}  >
                            <Typography>
                                hi
                        </Typography>
                        </Grid>

                        <Grid item md={12} xs={12} style={{
                            width: '100%',
                            height: "20%",
                            backgroundColor: 'rgb(240,128,128,0.6)',
                            padding: 0
                        }}>

                            <Typography>
                                hi000
                        </Typography>

                        </Grid>

                    </Grid>

                })}

            </Grid>

        </Grid>
    );
}