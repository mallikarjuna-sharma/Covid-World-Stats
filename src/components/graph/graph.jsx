import React,{useEffect} from 'react';
import 'chart.js'



export default function GenerateGraphComponent(props) {

    useEffect(()=>{
        generateGraph()
        console.log("generateGraph");
        
    },[])

    function generateGraph() {
        let canvasObj = document.getElementById('canvas').getContext('2d');
        let myLineChart = new Chart(canvasObj, {
            type: props.graphType,
            data: {
                labels:["mallik",'kedar','amma','anna','ganesh',"murali",'abcs','jedar','india'],
                datasets:[{
                    data:[1,2,3,4,5,6,7,8,9]
                }]
            },
            options: {
                responsive:true,
                legend:{
                    display:false
                }
            }
        });

    }

    return(

        <div>
    <canvas id="canvas" style={{}}> </canvas>
hielloo
    </div>

    )
}