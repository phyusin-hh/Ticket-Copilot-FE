import { Container, Box, Fab } from '@mui/material';
import AddForm from './Components/Form/AddForm';
import Bar from './Components/Form/Bar';

function App() {
  return (
    <div>
      <Bar />
      <Container maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <AddForm />
        </Box>
      </Container>
    </div>
  );
}

export default App;
