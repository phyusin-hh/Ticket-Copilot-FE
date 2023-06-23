import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import './ScenarioForm.css';

const ScenarioForm = () => {
  return (
    <div className="card">
      <FormControl fullWidth>
        <Select labelId="scenario-type" id="scenario-type" value={''} label="">
          <MenuItem value={'Given'}>Given</MenuItem>
          <MenuItem value={'When'}>When</MenuItem>
          <MenuItem value={'Then'}>Then</MenuItem>
          <MenuItem value={'And'}>And</MenuItem>
        </Select>
        <InputLabel id="detail">detail</InputLabel>
        <AddCircleIcon />
      </FormControl>
    </div>
  );
};

export default ScenarioForm;
