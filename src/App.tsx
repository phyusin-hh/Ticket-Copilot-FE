import { Container, Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddForm from './Components/Form/AddForm';
import Bar from './Components/Form/Bar';
//import './App.css';

function App() {
  return (
    <div>
      <Bar />
      <Container maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <AddForm />
        </Box>
        <Box sx={{ my: 4 }}>
          <div style={{ textAlign: 'center' }}>
            <Fab color="primary" aria-label="add" variant="extended">
              <AddIcon sx={{ mr: 1 }} />
              Create Ticket
            </Fab>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
