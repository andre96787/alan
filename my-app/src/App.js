import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header';
import  Playground from './Find_item';
import './App.css';
import  Selecter from './Select.js';
import Tooltip from '@material-ui/core/Tooltip';
import ReactModal  from 'react-modal';
import BadgeVisibility from './Date_find';
import TransitionsModal from './Select_list';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Page, Toolbar, Button,Popover,AlertDialog } from 'react-onsenui'; 

var ons = require('onsenui');
var Ons = require('react-onsenui');


 const ThemeContext = React.createContext('light');

  class Ap extends React.Component {
    render() {
      // Используйте Provider, чтобы передать текущую тему вглубь дерева.
      // Любой компонент может считать её, вне зависимости от того как глубоко она находится.
      // В данном примере, мы передаем "dark" как текущее значение.
      return (
        <ThemeContext.Provider value="dark">
        fdfdfd
        </ThemeContext.Provider>
      );
    }
  }







class App extends Component {




constructor () {
    super();
    this.state = {
      showModal: false,
      count:0,
    };


   
  }
  
  
 handleCancel(){
    this.setState({isOpen: false});
  }




 render(){
const numbers = [<BadgeVisibility />, 2, 3, 4, 5];
const listItems = numbers.map((number) =>

<li>{number}</li>

  
);




  return (
    <div class="container-fluid   body">
    <Header/>
    <div class="col-lg-6  col-md-5 col-sm-5 find">


<Playground/>

<Ap/>






         </div>

     

   



    </div>
  );
}
}
export default App;
