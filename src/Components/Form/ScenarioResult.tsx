import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import './ScenarioResult.css';

type ScenarioResultProps = {
  content: string;
};

const ScenarioResult = ({ content }: ScenarioResultProps) => {
  return (
    <Card className="card">
      <CardHeader>
        <Typography variant="h6" component="div">
          Acceptance Criterias
        </Typography>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default ScenarioResult;
