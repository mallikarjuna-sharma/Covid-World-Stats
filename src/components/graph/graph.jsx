import React from 'react';
import 'chart.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getgraphTypeAction, loadIndiaGeojson } from '../actions/index.jsx'

class GenerateGraphComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chart: false,
            maxYaxisValue: 0,
        }
    }

    componentDidMount() {
        this.setMaxYaxis();
        setTimeout(() => this.generateGraph(), 1000)
        window.addEventListener('resize', this.screenChanged)
    }

    screenChanged = () => {
        // console.log('screenChanged');
    }

    setMaxYaxis = () => {

        let max = 0;

        if (this.props.graphData)
            this.props.graphData.slice(0, 30).map(e => {
                if (typeof e[this.props.yAxisLabel] === "number" && e[this.props.yAxisLabel] > max) {
                    max = e[this.props.yAxisLabel];
                }
            })

        this.setState({ maxYaxisValue: max })
    }

    componentDidUpdate(prevProps) {


        if (prevProps.xAxisLabel !== this.props.xAxisLabel ||
            prevProps.yAxisLabel !== this.props.yAxisLabel ||
            prevProps.sortType !== this.props.sortType ||
            prevProps.count !== this.props.count
        ) {
            // this.removeLineGraph();
            setTimeout(() => this.generateGraph(), 1000)
        }
        if (prevProps.graphData !== this.props.graphData) {
            this.setMaxYaxis();
            this.removeLineGraph();
            setTimeout(() => this.generateGraph(), 1500)
        }
        if (prevProps.graphType !== this.props.graphType) {
            this.setMaxYaxis();
            setTimeout(() => this.generateGraph(), 0)
        }
    }

    removeLineGraph = () => {
        var parent = document.getElementById('resultsGraph');
        var child = document.getElementById('canvas');
        if (child)
            parent.removeChild(child);
        parent.innerHTML = '<canvas id="canvas" width="350px" height="99px" ></canvas>';
    }


    generateGraph = () => {

        let sliceStart = !(this.props.count <= 0) ? this.props.count*30 : 0;
        let sliceEnd =    this.props.count ? (this.props.count+1)*30 : 30;


        let xlabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.xAxisLabel]).slice(sliceStart, sliceEnd) : [1, 2, 3];
        let ylabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.yAxisLabel]).slice(sliceStart, sliceEnd) : [1, 1, 1];
       
        if (window.chart != undefined) {
            window.chart.destroy()
        }

        let canvasObj = ''
        let gradient = ''

        if (document.getElementById('canvas'))
            canvasObj = document.getElementById('canvas').getContext('2d');

        var width = window.innerWidth || document.body.clientWidth;

        if (canvasObj) {
            gradient = canvasObj.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, "#7C4DFF");
            gradient.addColorStop(0.3, "#448AFF");
            gradient.addColorStop(0.6, "#00BCD4");
            gradient.addColorStop(1, "#1DE9B6");
        }


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
                    pointBorderWidth: 2,
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
                        },
                        ticks: {
                            callback: function (tick) {
                                var characterLimit = 10;
                                if (tick.length >= characterLimit) {
                                    return tick.slice(0, tick.length).substring(0, characterLimit - 1).trim() + '...';
                                }
                                return tick;
                            }
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(200, 200, 200, 0.08)',
                            lineWidth: 1
                        },
                        ticks: {
                            beginAtZero: true,
                            steps: 10,
                            max: this.state.maxYaxisValue
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
                    titleFontColor: 'blue',
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
            <div>
                <div id="resultsGraph">
                    {
                        <canvas id="canvas" ></canvas>
                    }
                </div>
                </div>
        )
    }
}


function mapStateToProps(state) {
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