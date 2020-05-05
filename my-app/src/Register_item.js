import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';




import React, { Component } from 'react';
export default class Appon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       value: '',
        value1: '',
       valueOld: '',
        valueOld1: '',
       changed: false,
       length: 0
    }
  }
  
  input1Change = (e) => {
    let next = this.state;
    next.value = e.target.value;
    next.changed = next.value !== next.valueOld;
    next.length = e.target.value.length;
    this.setState(next);
    console.log(next);
  }

    input2Change = (e) => {
    let next1 = this.state;
    next1.value1 = e.target.value;
    next1.changed = next1.value1 !== next1.valueOld1;
    next1.length = e.target.value.length;
    this.setState(next1);
    console.log(next1);
  }
  
  





  render() {


    return (
      <div>
         <TextField id="outlined-basic" label="+380-00-000-0000" variant="outlined"  
   onChange={this.input1Change}  value={this.state.value} />
    <TextField id="outlined-basic" label="+380-00-000-0000" variant="outlined"  
   onChange={this.input2Change}  value={this.state.value1} />

       
 

      </div>
    );
  }
}