import React from 'react';
import 'chart.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getgraphTypeAction, loadIndiaGeojson } from '../actions/index.jsx'


class GeneratePieComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chart: false,
            maxYaxisValue: 0,
        }
    }

    componentDidMount() {
        setTimeout(this.generatePieChart(), 2000)
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
            prevProps.sortType !== this.props.sortType ||
            prevProps.count !== this.props.count
        ) {
            setTimeout(() => this.generatePieChart(), 1000)
        }
        if (prevProps.graphData !== this.props.graphData) {
            console.log(this.props.graphData, 'this.state.chart')
            setTimeout(() => this.generatePieChart(), 0)
        }
        if (prevProps.graphType !== this.props.graphType) {
            setTimeout(() => this.generatePieChart(), 0)
        }
    }


    removePieGraph = () => {
        var parent = document.getElementById('resultsGraph');
        var child = document.getElementById('pieChart');
        if (child)
            parent.removeChild(child);
        parent.innerHTML = '<canvas id="pieChart"  ></canvas>';
    }


    randomColor = () => {
        let color = 'rgb(' + ((Math.round(Math.random() * 255) > 25) ? Math.round(Math.random() * 255) : 35) + ',' + ((Math.round(Math.random() * 255) > 25) ? Math.round(Math.random() * 255) : 45) + ',' + ((Math.round(Math.random() * 255) > 25) ? Math.round(Math.random() * 255) : 55) + ')';
        return color;
    }

    generatePieChart = () => {

        let sliceStart = !(this.props.count <= 0) ? this.props.count*30 : 0;
        let sliceEnd =    this.props.count ? (this.props.count+1)*30 : 30;


        let xlabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.xAxisLabel]).slice(sliceStart, sliceEnd) : [1, 2, 3];
        let ylabelData = (this.props.graphData) ? this.props.graphData.map(e => e[this.props.yAxisLabel]).slice(sliceStart, sliceEnd) : [1, 1, 1];
        let colors = [];

        if (ylabelData) {
            for (let i = 0; i < ylabelData.length; i++)
                colors.push(this.randomColor())
        }

        console.log(colors, 'colors')

        var canvas = document.getElementById("pieChart");
        if (canvas)
            var ctx = canvas.getContext('2d');

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
            <div>
                <div id="resultspieGraph">
                    {
                        <canvas id="pieChart"></canvas>
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

export default connect(mapStateToProps, mapDispatchToProps)(GeneratePieComponent)