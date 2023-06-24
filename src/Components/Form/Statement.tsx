import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
} from '@mui/material';
import './Statement.css';
import { StatementType, type IStatement } from '../../model/Statement';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
interface Props {
  statement: IStatement;
  onStatementChange: (...args: any) => void;
}
const Statement = ({ statement, onStatementChange }: Props) => {
  return (
    <div className="wrapper">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <Select
              labelId="scenario-type"
              id="scenario-type"
              value={statement.type}
              onChange={(e: SelectChangeEvent<StatementType>) => {
                onStatementChange({ ...statement, type: e.target.value })
              }}
            >
              <MenuItem value={StatementType.Given}>Given</MenuItem>
              <MenuItem value={StatementType.When}>When</MenuItem>
              <MenuItem value={StatementType.Then}>Then</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <TextField
              id="standard-basic"
              label="detail"
              onChange={(e) => { 
                onStatementChange({ ...statement, detail: e.target.value  })
              }}
              value={statement.detail}
            />
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <FormControl>
            <RemoveCircleIcon className="statement-remove-icon" />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default Statement;
