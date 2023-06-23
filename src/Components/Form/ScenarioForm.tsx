import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Card, Grid, Typography } from "@mui/material";
import "./ScenarioForm.css";
import Statement from "./Statement";

const ScenarioForm = () => {
  const [statements, setStatements] = useState([
    {
      type: "",
      detail: "",
    },
  ]);
  const addStatement = () => {
    setStatements((s) => {
      return [
        ...s,
        {
          type: "",
          detail: "",
        },
      ];
    });
  };

  return (
    <div>
      <Card sx={{ maxWidth: 1000 }} className="wrapper">
        <Typography variant="h6" component="div">
          Scenario-id
        </Typography>
        {statements.map(() => {
          return <Statement />;
        })}
        <AddCircleIcon onClick={addStatement} />
      </Card>
    </div>
  );
};

export default ScenarioForm;
