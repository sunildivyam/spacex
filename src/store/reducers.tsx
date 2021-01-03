import { combineReducers } from 'redux';
import { getLaunchesReducer } from './launchs-reducer';

export const reducers = combineReducers({
  launches: getLaunchesReducer
});


export type AppState = ReturnType<typeof reducers>;
