import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TextField from '@material-ui/core/TextField';
import CustomCheckbox from '../../components/checkbox';
import CustomInput from '../../components/input';
import CustomSelect from '../../components/select';

export default function TestPage(props) {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <div className="checkboxes">
        <FormControlLabel
          control={<CustomCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary"/>}
          label="Secondary"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
          label="Primary"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" icon={<CheckBoxOutlineBlankIcon/>} checkedIcon={<CheckBoxIcon/>} color="primary"/>}
          label="Custom color"
        />
      </div>
      <div className="inputs">
        <div style={{width: "100px"}}>
          <CustomInput variant="outlined" placeholder='test_email@mail.com'/>
        </div>
        <CustomInput variant="outlined" placeholder='password'/>
        <TextField variant="outlined" />
      </div>
      <div className="selects">
        <div style={{width: "200px"}}>
          <CustomSelect variant="outlined" styleType="simple"/>
        </div>
        
      </div>
    </div>
  )
}