import { combineReducers } from 'redux';
import { getLaunchesReducer, getFiltersReducer, getProgressReducer } from './reducers';

export const reducers = combineReducers({
  launches: getLaunchesReducer,
  filters: getFiltersReducer,
  progress: getProgressReducer
});

export type AppState = ReturnType<typeof reducers>;
