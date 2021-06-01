import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    colorPrimary: {
      color: 'black',
      '&$checked': {
        color: 'black',
      },
    },
    checked: {}
}));

export default function CustomCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox {...props} classes={{
      colorPrimary: classes.colorPrimary,
      checked: classes.checked
    }}/>
  )
}