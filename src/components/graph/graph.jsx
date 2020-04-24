import React from 'react';
import 'chart.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getgraphTypeAction, loadIndiaGeojson } from '../actions/index.jsx'

class GenerateGraphComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chart: false
        }
    }

    componentDidMount() {
        this.generateGraph();
        window.addEventListener('resize', this.screenChanged)

    }

    screenChanged = () => {
        console.log('screenChanged');
    }



    componentDidUpdate(prevProps) {

        console.log(this.props.graphType, 'graphType');
        console.log(this.props.graphData, 'graphData');
        console.log(this.props.xAxisLabel, 'xAxisLabel');
        console.log(this.props.yAxisLabel, 'yAxisLabel');

        if (prevProps.xAxisLabel !== this.props.xAxisLabel ||
            prevProps.yAxisLabel !== this.props.yAxisLabel ||
            prevProps.sortType !== this.props.sortType
        ) {
            // this.removeGraph()
        }
        if (prevProps.graphData !== this.props.graphData) {
            console.log(this.state.chart, 'this.state.chart')
            // this.removeGraph()
            // window.chart.update();
            this.generateGraph()
            // setTimeout(() =>  this.generateGraph() ,200)
        }
        if (prevProps.graphType !== this.props.graphType) {
            // this.removeGraph()
            setTimeout(() => this.generateGraph(), 0)
        }
    }

    removeGraph = () => {
        var parent = document.getElementById('resultsGraph');
        var child = document.getElementById('canvas');
        parent.removeChild(child);
        parent.innerHTML = '<canvas id="canvas" width="350px" height="99px" ></canvas>';
    }


    generateGraph = () => {

        let xlabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.xAxisLabel]).slice(0, 30) : [1, 2, 3];
        let ylabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.yAxisLabel]).slice(0, 30) : [1, 1, 1];

        if (window.chart != undefined) {
            window.chart.destroy()
        }

        let canvasObj = ''

        canvasObj = document.getElementById('canvas').getContext('2d');
        var width = window.innerWidth || document.body.clientWidth;
        const gradient = canvasObj.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "#7C4DFF");
        gradient.addColorStop(0.3, "#448AFF");
        gradient.addColorStop(0.6, "#00BCD4");
        gradient.addColorStop(1, "#1DE9B6");

        let chart = '';

        window.chart = new Chart(canvasObj, {
            type: this.props.graphType,
            data: {
                labels: xlabelData,
                datasets: [{
                    data: ylabelData,
                    backgroundColor: gradient,
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#911215',
                    lineTension: .25,
                    aspectRatio: 1,
                    pointHoverBorderColor: 2,
                    showLine: true,
                    borderColor: gradient,
                    pointBorderWidth: 4,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    easing: 'easeInOutQuad',
                    duration: 520
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgba(200, 200, 200, 0.05)',
                            lineWidth: 1
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(200, 200, 200, 0.08)',
                            lineWidth: 1
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                },
                legend: {
                    display: false
                },
                point: {
                    backgroundColor: 'white'
                },
                tooltips: {
                    titleFontFamily: 'Open Sans',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    titleFontColor: 'red',
                    caretSize: 5,
                    cornerRadius: 2,
                    xPadding: 10,
                    yPadding: 10
                }
            }
        });

        this.setState({ chart: chart })
    }


    render() {
        return (
            <div id="resultsGraph">
                <canvas id="canvas" width="300" height="300"></canvas>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('stateingraph', state)
    return {
        sortType: state.sortType,
        graphType: state.graphType,
        xAxisLabel: state.xAxisLabel,
        yAxisLabel: state.yAxisLabel,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getgraphTypeAction, loadIndiaGeojson }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateGraphComponent)