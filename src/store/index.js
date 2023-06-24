import { createSlice, configureStore } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
const initialState = { scenarios: [] };

const scenarioListSlice = createSlice({
  name: 'scenarioList',
  initialState,
  reducers: {
    addScenario(state, action) {
      const newScenario = {
        id: v4(),
        statements: action.payload,
      };
      state.scenarios.push(newScenario);
    },
    removeScenario(state, action) {
      const index = state.scenarios.findIndex(
        (task) => task.id === action.payload
      );
      state.scenarios.splice(index, 1);
    },
  },
});

// const statementListSlice = createSlice({
//   name: 'statementList',
//   initialState,
//   reducers: {
//     addstatement(state, action) {
//       const newstatement = {
//         id: v4(),
//         statements: action.payload,
//       };
//       state.statements.push(newstatement);
//     },
//     removestatement(state, action) {
//       const index = state.statements.findIndex(
//         (task) => task.id === action.payload
//       );
//       state.statements.splice(index, 1);
//     },
//   },
// });

const store = configureStore({
  reducer: scenarioListSlice.reducer,
});

export const scenarioActions = scenarioListSlice.actions;
//export const statementactions = statementListSlice.actions;
export default store;
