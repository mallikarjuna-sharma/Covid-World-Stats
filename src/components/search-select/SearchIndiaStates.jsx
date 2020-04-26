import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class SearchIndiaStates extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={this.props.items}
        getOptionLabel={(option) => option.value}
        onClick={(e,value) => {this.props.selectedState_india(value.value) }}
        getOptionSelected={(e,value) => {this.props.selectedState_india(value.value) } }
        style={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="Select a State" variant="outlined" />}
      />
    )
  }
}
