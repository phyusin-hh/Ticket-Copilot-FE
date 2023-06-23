import React, { ChangeEvent, useState } from "react";
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import "./Statement.css";

const Statement = () => {
  const [selectedType, setSelectedType] = useState("Given");
  const [detail, setDetail] = useState("");

  const hanldleTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedType(event.target.value);
  };
  const hanldleDetailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDetail(event.target.value);
  };

  return (
    <div className="wrapper">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <Select
              labelId="scenario-type"
              id="scenario-type"
              value={selectedType}
              onChange={hanldleTypeChange}
            >
              <MenuItem value={"Given"}>Given</MenuItem>
              <MenuItem value={"When"}>When</MenuItem>
              <MenuItem value={"Then"}>Then</MenuItem>
              <MenuItem value={"And"}>And</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <TextField
              id="standard-basic"
              label="detail"
              onChange={hanldleDetailChange}
              value={detail}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default Statement;
