
import React, { Component } from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import logo from './op.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    
    border:'1px solid red',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));
export default function Mel_one(props) {
    const classes = useStyles();


   const [count, setCount] = React.useState(1);




    const reduceBedCounter = (event) => {
        event.stopPropagation();
      
 
              setCount(Math.min(count - 1, 4));

       
    }


    const increaseBedCounter = (event) => {
        event.stopPropagation();
               setCount(Math.min(count + 1, 7));

    }



    return (<div
                className={classes.root}
                onClick={props.onFieldSelected}
                class="row col-lg-12 icon_glava"
            >
                 <div class="icon col-lg-4 one"></div>
                <div сlass="icon_but col-lg-6">
                    <Button aria-label="reduce" onClick={reduceBedCounter.bind(this)}>
                        <RemoveIcon fontSize = "small" />
                    </Button>
                    {count }
                    <Button aria-label="increase" onClick={increaseBedCounter.bind(this)}>
                        <AddIcon fontSize = "small" />
                    </Button>
                </div>
            </div>);
}