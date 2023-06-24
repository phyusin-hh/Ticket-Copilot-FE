import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { StatementType } from '../model/Statement';

interface Statement {
  id: string;
  detail: string;
  type: StatementType
}
export interface StateScenario {
  id: string;
  detail: string;
  statements: Statement[];
}
interface AddScenarioPayload {
  statements: Statement[];
  detail: string;
}

export interface State {
  scenarios: StateScenario[];
}

const initialState: State = { scenarios: [] };

const scenarioListSlice = createSlice({
  name: 'scenarioList',
  initialState,
  reducers: {
    addScenario(state, action: PayloadAction<AddScenarioPayload>): State {
      return {
        ...state,
        scenarios: [
          ...state.scenarios,
          {
            id: v4(),
            detail: action.payload.detail,
            statements: action.payload.statements,
          },
        ],
      };
    },
    updateScenarioDetail(state, action: PayloadAction<{ id:string, detail: string}>): State {
      const index = state.scenarios.findIndex(s => s.id === action.payload.id);
      if (index >= 0) {
        state.scenarios[index].detail = action.payload.detail;
      }
      return state;
    },
    addStatements(state, action: PayloadAction<StateScenario>): State {
      const scenarioIndex = state.scenarios.findIndex(s => s.id === action.payload.id);
      if (scenarioIndex === -1) return state;
      state.scenarios[scenarioIndex].statements = action.payload.statements;
      return state;
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
