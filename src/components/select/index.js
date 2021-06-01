import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': {
        border: '2px solid black',
      },
      // '&:hover fieldset': {
      //   borderColor: 'black',
      // },
      '&.Mui-focused fieldset': {
        border: '2px solid black',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '5px 10px',
      paddingRight: '32px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      fontWeight: '400',
      '&::placeholder': {
        color: 'grey',
        opacity: 1
      }
    }
    
  }
}));

export default function CustomSelect(props) {
  const classes = useStyles();

  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={classes.root} variant={props.variant}>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}