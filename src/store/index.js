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

const store = configureStore({
  reducer: scenarioListSlice.reducer,
});

export const scenarioActions = scenarioListSlice.actions;
export default store;
