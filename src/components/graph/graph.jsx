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
        setTimeout(this.generateGraph(), 2000)
        window.addEventListener('resize', this.screenChanged)
    }

    screenChanged = () => {
        console.log('screenChanged');
    }

    setMaxYaxis = () => {

        let max = 0;

        if (this.props.graphData)
            this.props.graphData.slice(0, 30).map(e => {

                if (typeof e[this.props.yAxisLabel] === "number" && e[this.props.yAxisLabel] > max) {
                    max = e[this.props.yAxisLabel];
                }
            })

        console.log(max, 'max');

        this.setState({ maxYaxisValue: max })


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
            console.log(this.props.graphData, 'this.state.chart')

            this.setMaxYaxis();

            if (this.props.graphType === 'pie')
                setTimeout(() => this.generatePieChart(), 0)
            else
                setTimeout(() => this.generateGraph(), 0)

        }
        if (prevProps.graphType !== this.props.graphType) {
            this.setMaxYaxis();
            if (this.props.graphType === 'pie' || this.props.graphType === 'doughnut')
                setTimeout(() => this.generatePieChart(), 0)
            else
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

    randomColor = () => {
        let color = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';

        return color;
    }

    generatePieChart = () => {
        let xlabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.xAxisLabel]).slice(0, 30) : [1, 2, 3];
        let ylabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.yAxisLabel]).slice(0, 30) : [1, 1, 1];
        let colors = [];

        if (ylabelData) {
            for (let i = 0; i < ylabelData.length; i++)
                colors.push(this.randomColor())
        }

        console.log(colors, 'colors')

        var canvas = document.getElementById("pieChart");
        if (canvas)
            var ctx = canvas.getContext('2d');

        // Chart.defaults.global.defaultFontColor = 'red';
        // Chart.defaults.global.defaultFontSize = 16;

        var data = {
            labels: xlabelData,
            datasets: [
                {
                    fill: true,
                    backgroundColor: colors,
                    data: ylabelData,
                    borderColor: colors,
                    borderWidth: [2, 2]
                }
            ]
        };

        var options = {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            title: {
                display: true,
                position: 'top'
            },
            rotation: -0.7 * Math.PI
        };


        if (window.myPieChart != undefined) {
            window.myPieChart.destroy()
        }

        window.myPieChart = new Chart(ctx, {
            type: this.props.graphType,
            data: data,
            options: options
        });


    }


    render() {
        return (
            <div id="resultsGraph">
                {(this.props.graphType === 'line' || this.props.graphType === 'bar') ?
                    <canvas id="canvas" width="300" height="300"></canvas>
                    :
                    <canvas id="pieChart" width="300" height="300"></canvas>
                }
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