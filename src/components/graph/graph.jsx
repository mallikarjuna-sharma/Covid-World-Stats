import React from 'react';
import 'chart.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getgraphTypeAction, loadIndiaGeojson } from '../actions/index.jsx'

class GenerateGraphComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chart: ''
        }
    }

    componentDidMount() {
        this.generateGraph();
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
    console.log('stateingraph', state)
    return {
        num: state.num,
        graphType: state.graphType,
        searchedText: state.searchedText,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getgraphTypeAction, loadIndiaGeojson }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateGraphComponent)