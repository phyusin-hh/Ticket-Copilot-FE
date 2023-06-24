import { useState } from 'react';
import { Container, Box, Fab } from '@mui/material';
import AddForm from './Components/Form/AddForm';
import Result from './Components/Form/Result';
import Bar from './Components/Form/Bar';

function App() {
  const sampleResults = [
    {
      content:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde' +
        'fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,' +
        'aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in',
    },
    {
      content:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde' +
        'fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,' +
        'aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in',
    },
  ];

  const [isAddForm, setIsAddForm] = useState(true);

  const toggleButton = () => {
    setIsAddForm(!isAddForm);
  };

  return (
    <div>
      <Bar />
      <Container maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          {isAddForm && <AddForm toggleButton={toggleButton} />}
          {!isAddForm && (
            <Result
              scenarioResults={sampleResults}
              toggleButton={toggleButton}
            />
          )}
        </Box>
      </Container>
    </div>
  );
}

export default App;
