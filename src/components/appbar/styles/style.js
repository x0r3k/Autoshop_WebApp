import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  lightLanguageSelect: {
    '& .MuiInputBase-input': {
      color: 'white'
    },
    '& .MuiInput-underline': {
      '&:before': {
        borderBottom: '1px solid white'
      },
      '&:after': {
        borderBottom: '2px solid white'
      },
    },
    '& .MuiSelect-icon': {
      color: 'white'
    }
  },
  darkLanguageSelect: {
    '& .MuiInputBase-input': {
      color: 'black'
    },
    '& .MuiInput-underline': {
      '&:before': {
        borderBottom: '1px solid black'
      },
      '&:after': {
        borderBottom: '2px solid black'
      },
    },
    '& .MuiSelect-icon': {
      color: 'black'
    }
  }
}));