import { useState } from "react";
import { v4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Card,
  Grid,
  Typography,
  Fab,
  FormControl,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ScenarioForm.css";
import Statement from "./Statement";
import { StatementType, type IStatement } from "../../model/Statement";
import { useDispatch } from "react-redux";
import { scenarioActions } from "../../store";

type ScenarioProps = {
  id: string;
  index: number;
  removeScenario: Function;
};

const ScenarioForm = ({ id, index, removeScenario }: ScenarioProps) => {
  const [detail, setDetail] = useState("");
  const dispatch = useDispatch();

  const [statements, setStatements] = useState<IStatement[]>([
    {
      id: v4(),
      type: StatementType.Given,
      detail: "",
    },
  ]);

  const onStatementChange = ({ id: statementId, ...newStatement }: IStatement) => {
    const previousStatementIndex = statements.findIndex((s) => s.id === statementId);
    const newStatements = [...statements];
    newStatements[previousStatementIndex] = { id: statementId, ...newStatement };
    setStatements(newStatements);
    dispatch(scenarioActions.addStatements({ id, detail, statements: newStatements }))
  };

  return (
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
              onChange={(e) => {
                dispatch(scenarioActions.updateScenarioDetail({ id, detail: e.target.value }))
                setDetail(e.target.value)
              }}
              value={detail}
            />
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: "right" }}>
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

      {statements.map((statement) => {
        return (
          <Statement
            key={statement.id}
            statement={statement}
            onStatementChange={onStatementChange}
          />
        );
      })}
      <AddCircleIcon
        onClick={() =>
          setStatements([
            ...statements,
            { id: v4(), type: StatementType.Given, detail: '' },
          ])
        }
      />
    </Card>
  );
};

export default ScenarioForm;
