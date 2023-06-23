import { useState } from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ScenarioForm from './ScenarioForm';
import './AddForm.css';

const AddForm = () => {
  const [ticketType, setTicketType] = useState('');
  const [industry, setIndustry] = useState('');
  const submitHandler = () => {};

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <label className="label">Ticket Type</label>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value=""
            label=""
          >
            <MenuItem value="Bug">Bug</MenuItem>
            <MenuItem value="Task">Task</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <label>Industry</label>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <TextField id="standard-basic" label="Standard" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <ScenarioForm />
      </Grid>
      {/* <Grid item xs={12}>
        
      </Grid> */}
    </Grid>
  );
};

export default AddForm;
