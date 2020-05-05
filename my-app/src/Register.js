import React, { Component } from 'react';
import {getHistory} from './histor';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Appon from './Register_item';
const axios = require('axios');



export default class Register extends Component {


constructor(props) {
    super(props);
    this.state = {

 value: '',
        value1: '',
       valueOld: '',
        valueOld1: '',
       changed: false,
       length: 0
  };

    this.handleChange = this.handleChange.bind(this);
   
  }


handleChange(e) {
  console.log(this.state.value);
    this.setState({value: e.target.value+' '});
    
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
      <div  class="container register">
       
<div   class="list_one">fdfd</div>
<div class="col-lg-5 item_log row " style={{'border':'1px solid red','margin-left':'500px','height':'250px','width':'300px','margin-top':'200px'}}>
      
    <TextField id="outlined-basic" label="+380-00-000-0000" variant="outlined"  
   onChange={this.input1Change}  value={this.state.value} />



    <TextField id="outlined-basic" label="****" variant="outlined"  
   onChange={this.input2Change}  value={this.state.value1} />

       

<div id="link">
   <div id="block">

<div class="block_op">


</div>

   </div>
   
</div>
      


</div>



      </div>
    )

  }
}