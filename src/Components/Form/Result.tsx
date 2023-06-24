import ScenarioResult from './ScenarioResult';
import { Fab, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type ResultProps = {
  scenarioResults: Array<resultDataProps>;
  toggleButton: Function;
};

type resultDataProps = {
  content: string;
};

const Result = ({ scenarioResults, toggleButton }: ResultProps) => {
  return (
    <div className="wrapper">
      <Typography variant="h6" component="div">
        Acceptance Criterias
      </Typography>
      <br />
      {scenarioResults?.map((result) => {
        return <ScenarioResult content={result.content} />;
      })}
      <div style={{ textAlign: 'center' }}>
        <Fab
          color="primary"
          aria-label="add"
          variant="extended"
          onClick={() => toggleButton()}
        >
          <ArrowBackIcon />
          Back To Test
        </Fab>
      </div>
    </div>
  );
};

export default Result;
