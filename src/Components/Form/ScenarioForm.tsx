import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, Grid, Typography, Fab } from '@mui/material';
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

  return (
    <div>
      <Card sx={{ maxWidth: 1000 }} className="wrapper">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6" component="div">
              Scenario-{index + 1}
            </Typography>
          </Grid>
          <Grid item xs={4}>
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
