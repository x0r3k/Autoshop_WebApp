import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStylesBlack = makeStyles(theme => ({
  root: {
    width: "100%",
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': {
        border: '2px solid black',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid black',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '5px 10px',
      paddingRight: '32px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: 1.1,
      fontWeight: '400',
      '&::placeholder': {
        color: 'grey',
        opacity: 1
      }
    }
  }
}));

const useStylesSimple = makeStyles(theme => ({
  root: {
    width: "100%",
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': {
        border: '1px solid #E8E8E8',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid black',
      },
      '&:hover fieldset': {
        borderColor: '#E8E8E8',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '0.9rem',
      fontWeight: '400',
      '&::placeholder': {
        color: 'grey',
        opacity: 1
      }
    }
  }
}));

export default function CustomSelect(props) {
  // const classes = useStylesBlack();

  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const classes = {
    black: useStylesBlack(),
    simple: useStylesSimple()

  }

  return (
    <FormControl className={classes[props.styleType].root} variant={props.variant}>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={age}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
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