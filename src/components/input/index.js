import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': {
        borderColor: '#E8E8E8',
      },
      '&:hover fieldset': {
        borderColor: '#E8E8E8',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid black',
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
  },
}));

export default function CustomInput(props) {
  const classes = useStyles();

  return (
    <TextField {...props} classes={{
      root: classes.root
    }}
    />
  )
}