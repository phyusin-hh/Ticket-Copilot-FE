import { useState, ChangeEvent } from 'react';
import { Grid, Typography, Fab, SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';

import ScenarioForm from './ScenarioForm';
import { State, scenarioActions } from '../../store';
import { TicketType, RoleType } from '../../model/StoryRequestBody';
import TicketTypeSelect from './TicketTypeSelect';
import IndustryForm from './IndustryForm';
import RoleTypeSelect from './RoleTypeSelect';
import { StatementType } from '../../model/Statement';

type AddFormProps = {
  toggleButton: Function;
};

const AddForm = ({ toggleButton }: AddFormProps) => {
  const dispatch = useDispatch();
  const scenarios = useSelector((state: State) => state.scenarios);

  const addScenario = () => {
    dispatch(scenarioActions.addScenario({
      statements: [],
      detail: '',
    }));
  };

  const removeScenario = (id: number) => {
    dispatch(scenarioActions.removeScenario(id));
  };

  const [ticketType, setTicketType] = useState(TicketType.UserStory);
  const [industry, setIndustry] = useState('');
  const [roleType, setRoleType] = useState(RoleType.BA);

  const submitHandler = () => {
    axios.post('http://localhost:3001/create/story', {
      ticketType,
      industry,
      role: roleType,
      scenarios: scenarios.map(scenario => {
        const given = scenario.statements.filter(statement => statement.type === StatementType.Given)
        const when = scenario.statements.filter(statement => statement.type === StatementType.When)
        const then = scenario.statements.filter(statement => statement.type === StatementType.Then)
        return {
          scenario: scenario.detail,
          given: given.map(g => g.detail),
          when: when.map(g => g.detail),
          then: then.map(g => g.detail)
        };
      })
    }).then(d => console.log(d));
    // toggleButton();
  };

  const handleTicketTypeChange = (event: SelectChangeEvent<TicketType>) => {
    setTicketType(event.target.value as TicketType);
  };
  const handleIndustryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIndustry(event.target.value);
  };

  const hanldleRoleTypeChange = (event: SelectChangeEvent<RoleType>) => {
    setRoleType(event.target.value as RoleType);
  };

  return (
    <div className="wrapper">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <label>Ticket Type</label>
        </Grid>
        <Grid item xs={8}>
          <TicketTypeSelect
            ticketType={ticketType}
            onTicketTypeChange={handleTicketTypeChange}
          />
        </Grid>

        <Grid item xs={4}>
          <label>Industry</label>
        </Grid>
        <Grid item xs={8}>
          <IndustryForm
            industry={industry}
            onIndustryChange={handleIndustryChange}
          />
        </Grid>

        <Grid item xs={4}>
          <label>Role Type</label>
        </Grid>
        <Grid item xs={8}>
          <RoleTypeSelect
            roleType={roleType}
            onRoleTypeChange={hanldleRoleTypeChange}
          />
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
            <Fab
              color="primary"
              aria-label="add"
              variant="extended"
              onClick={submitHandler}
            >
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
