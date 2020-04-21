import React from 'react';
import 'chart.js'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GenerateGraphComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chart: ''
        }
    }

    componentDidMount() {
        this.generateGraph();

        axios.get('https://covid19-data.p.rapidapi.com/india', {
            headers: {
                'X-RapidAPI-Host': 'covid19-data.p.rapidapi.com',
                "X-RapidAPI-Key": "d55fe518a0mshfaba210c9470cefp1be9e7jsn4ee844d0190d"
            },
        })
            .then(res => {
                console.log(res)
            })

        console.log("componentDidMount graph");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.graphType !== this.props.graphType) {
            if (this.state.chart) chart.destroy();
            this.generateGraph();
        }
    }

    generateGraph = () => {
        let canvasObj = document.getElementById('canvas').getContext('2d');

        let chart = '';


        if (window.chart)
            window.chart.destroy();

        window.chart = new Chart(canvasObj, {
            type: this.props.graphType,
            data: {
                labels: ["mallik", 'kedar', 'amma', 'anna', 'ganesh', "murali", 'abcs', 'jedar', 'india'],
                datasets: [{
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                }]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                }
            }
        });

        this.setState({ chart: chart })
    }



    render() {
        return (
            <div>
                <canvas id="canvas" > </canvas>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        num: state.num,
        graphType: state.graphType,
        searchedText: state.searchedText,
    }
}

export default connect(mapStateToProps, null)(GenerateGraphComponent)