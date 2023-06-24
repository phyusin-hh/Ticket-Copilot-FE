import { Fab, Typography, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './ScenarioResult.css';

type StoryResultProps = {
  result: string;
  toggleButton: Function;
  setResult: Function;
};

const StoryResult = ({ result, toggleButton, setResult }: StoryResultProps) => {
  const BackToTest = () => {
    setResult('');
    toggleButton();
  };

  return (
    <div className="wrapper">
      <Typography variant="h4" component="div">
        Your Story
      </Typography>
      <br />
      <Card className="card">
        <CardContent>{result}</CardContent>
      </Card>
      <div style={{ textAlign: 'center' }}>
        <Fab
          color="primary"
          aria-label="add"
          variant="extended"
          onClick={() => BackToTest()}
        >
          <ArrowBackIcon />
          Back To Test
        </Fab>
      </div>
    </div>
  );
};

export default StoryResult;
