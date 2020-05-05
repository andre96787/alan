/* eslint-disable no-use-before-define */
import React, { Component } from 'react';


import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import BadgeVisibility from './Date_find';
import $ from "jquery";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ExtendableSelect from './Select';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';

import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Mel_one from './SelectOne';
import Select from '@material-ui/core/Select';



export default class  Playground extends Component {







  constructor(props) {
        super(props);
      




        this.state = {
          
     count:0,
     selt:true,
     oneBedCounter:0,
     open:false,
        }
    }







handleChange(fieldIndex, bedType, bedCount) {

  
}


       

       Clickot(event){

 let newValue = Boolean(event.target.checked);
  this.setState({selt: newValue});
console.log(this.state.selt);

       }





  


render(){

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
})); 




  



var v = this.state.count;
var items=[1];
 let component;
var listItems;
const handleChange = (event) => {
    
  };



listItems = [...new Array(v)].map( (el, index) => <li>
 <ExtendableSelect items={items} key={index}  onChange={this.handleChange.bind(this, index)}   />

 </li> );






  return (
      <div class="row  "  >
   <form  style={{'display':'flex'}}>

<Autocomplete
  id="combo-box-demo"
  options={top100Films}
  getOptionLabel={(option) => option.title}
  style={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>



      <TextField
        id="date"
        label="Заезд"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="date"
        label="Отьезд"
        type="date"
        defaultValue="2017-05-24"
      
        InputLabelProps={{
          shrink: true,
        }}
      />

        <div class="wrapper">
   <input style={{'width':'180px','height':'40px'}}/>
   <div class="popup" >

   <div class="block_one" style={{'margin-top':'100px','margin-left':'100px'}}>
<div class="col-lg-4" style={{'margin-top':'-60px'}}>





Сколько комнат?
 <Button
            aria-label="reduce"
            onClick={() => {
          
let newCount = this.state.count-1;


if (newCount == 0) {
   newCount = 1;
}
          
this.setState({count: newCount});

            }}
          >
<RemoveIcon fontSize="small" />
</Button>

        {this.state.count}
          <Button
            aria-label="increase"
            onClick={() => {
               this.setState({count:this.state.count+1});
            


let newCount = this.state.count+1;
if (newCount > 4) {
   newCount = 4;
}
this.setState({count: newCount});



            }}
          >

            <AddIcon fontSize="small" />
          </Button>
      




{ this.state.selt ?<div style={{'height':'150px'}}><Mel_one bedCount={this.state.oneBedCounter} onBedCountChange={this.handleChange.bind(this, 0)} /></div> : <ul class="col-lg-12 col-md-6 items_col">{listItems}</ul> }


<div  style={{'margin-left':'500px','margin-top':'-180px','display':'flex','border':'1px solid red'}}>
<FormControlLabel
 
        control={<Checkbox  onChange={this.Clickot.bind(this)} name="checkedA" />}
        label="Готовы быть в комнате с соседями?"

      />
</div>

<div class="col-lg-12" style={{'border':'1px solid red','height':'100px','width':'400px','display':'flex','flex-wrap':'wrap','margin-top':'100px'}}>
<FormControlLabel
        control={<Checkbox  onChange={handleChange} name="checkedA" />}
        label="Бронь на мне?"

      />

      <TextField    id="standard-basic" label="Standard"   />

 <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
      
       
            <option value={4}>Option 4</option>
         
        </Select>
         <TextField    id="standard-basic" label="Standard"   />

</div>

</div>


   </div>


   </div>
</div>






     
    </form>


   


    </div>
  );
}
}
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];