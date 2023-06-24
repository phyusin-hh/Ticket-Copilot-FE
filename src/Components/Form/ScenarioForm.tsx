import React, { ChangeEvent, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Card,
  Grid,
  Typography,
  Fab,
  FormControl,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ScenarioForm.css';
import Statement from './Statement';

type ScenarioProps = {
  key: number;
  id: string;
  index: number;
  removeScenario: Function;
};

const ScenarioForm = ({ key, index, removeScenario }: ScenarioProps) => {
  const [detail, setDetail] = useState('');

  const [statements, setStatements] = useState([
    {
      type: '',
      detail: '',
    },
  ]);
  const addStatement = () => {
    setStatements((s) => {
      return [
        ...s,
        {
          type: '',
          detail: '',
        },
      ];
    });
  };
  const hanldleDetailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDetail(event.target.value);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 1000 }} className="wrapper">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="h6" component="div">
              Scenario-{index + 1}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="scenario detail"
                onChange={hanldleDetailChange}
                value={detail}
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <div style={{ textAlign: 'right' }}>
              <Fab
                size="small"
                color="secondary"
                aria-label="close"
                onClick={() => removeScenario()}
              >
                <CloseIcon />
              </Fab>
            </div>
          </Grid>
        </Grid>

        {statements.map(() => {
          return <Statement />;
        })}
        <AddCircleIcon onClick={addStatement} />
      </Card>
    </div>
  );
};

export default ScenarioForm;
