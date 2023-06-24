import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Scenario } from '../model/StoryRequestBody';
import { v4 } from 'uuid';

interface StateScenario {
  id: string;
  statements: any;
}

interface StateStatement {
  id: string;
  type: string;
  detail: string;
}

interface State {
  scenarios: StateScenario[];
}

const initialState: State = { scenarios: [] };

const scenarioListSlice = createSlice({
  name: 'scenarioList',
  initialState,
  reducers: {
    addScenario(state, action: PayloadAction<Scenario>): State {
      return {
        ...state,
        scenarios: [
          ...state.scenarios,
          {
            id: v4(),
            statements: action.payload,
          },
        ],
      };
    },
    removeScenario(state, action) {
      const index = state.scenarios.findIndex(
        (task) => task.id === action.payload
      );
      state.scenarios.splice(index, 1);
    },
  },
});

const statementListSlice = createSlice({
  name: 'statementList',
  initialState,
  reducers: {
    addStatement(state, action: PayloadAction<Scenario>): State {
      return {
        ...state,
        scenarios: [
          ...state.scenarios,
          {
            id: v4(),
            statements: action.payload,
          },
        ],
      };
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
