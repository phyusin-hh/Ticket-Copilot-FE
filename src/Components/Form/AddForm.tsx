import React, { useState, ChangeEvent } from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Fab,
  SelectChangeEvent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ScenarioForm from './ScenarioForm';
import './AddForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { scenarioActions } from '../../store';

const AddForm = () => {
  const dispatch = useDispatch();
  const scenarios = useSelector((state: any) => state.scenarios);

  const addScenario = () => {
    dispatch(scenarioActions.addScenario([{}]));
  };

  const removeScenario = (id: number) => {
    dispatch(scenarioActions.removeScenario(id));
  };

  const [ticketType, setTicketType] = useState('');
  const [industry, setIndustry] = useState('');
  const submitHandler = () => {};

  const hanldleTicketTypeChange = (event: SelectChangeEvent<string>) => {
    setTicketType(event.target.value);
  };
  const hanldleIndustryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIndustry(event.target.value);
  };

  return (
    <div className="add_form_wrapper">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <label>Ticket Type</label>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <Select
              labelId="ticket-type"
              id="ticket-type"
              value={ticketType}
              onChange={hanldleTicketTypeChange}
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
            <TextField
              id="industry"
              label="Industry"
              value={industry}
              onChange={hanldleIndustryChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="div">
            Scenarios
          </Typography>
          {scenarios?.map((item: any, index: any) => {
            return (
              <ScenarioForm
                key={index}
                index={index}
                id={item.id}
                removeScenario={removeScenario.bind(item.id)}
              />
            );
          })}
        </Grid>

        <Grid item xs={12}>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={addScenario}
          >
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <div style={{ textAlign: 'center' }}>
            <Fab color="primary" aria-label="add" variant="extended">
              <AddIcon sx={{ mr: 1 }} />
              Create Ticket
            </Fab>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddForm;
