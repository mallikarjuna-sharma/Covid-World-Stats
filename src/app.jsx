import React from 'react';
import {Button} from '@material-ui/core'

import GenerateTableComponent from './components/table/table.jsx'
import GenerateGraphComponent from './components/graph/graph.jsx'


class App extends React.Component {

    constructor(props){
        super(props)

        this.state={
            graphType:'line'
        }

    }


    componentDidMount(){
       
    }


    toggleGraphType = () => {

        let changeType = '';

        switch(this.state.graphType){
            case 'line':
                changeType='bar';
                break;
            case 'bar':
                changeType='line';
                break;
            default:
                changeType='line';
                break;
        }
        
        this.setState({ graphType :  changeType  })

    }

    

 render() {
  return(
   <div >
    My App Component
    <Button onClick={e => this.toggleGraphType() }  >   Change type    </Button>
   

    <div>
    <GenerateTableComponent/>
    </div>

    <div>
    <GenerateGraphComponent {...this.state}/>
    </div>

    

    
   </div>
  );
 }
}
export default App