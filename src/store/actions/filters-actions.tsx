import { IFilters } from "../../models";

export const GET_FILTERS = 'GET_FILTERS';
export const TOGGLE_YEAR = 'TOGGLE_YEAR';
export const TOGGLE_SUCESSFUL_LAUNCH = 'TOGGLE_SUCESSFUL_LAUNCH';
export const TOGGLE_SUCESSFUL_LANDING = 'TOGGLE_SUCESSFUL_LANDING';

export interface IFiltersAction {
    type: typeof GET_FILTERS | typeof TOGGLE_YEAR | typeof TOGGLE_SUCESSFUL_LAUNCH | typeof TOGGLE_SUCESSFUL_LANDING;
    payload?: any
}

export const getFiltersAction = (filters: IFilters): IFiltersAction => {
    return {
      type: GET_FILTERS,
      payload: filters
    };
};

export const toggleYearAction = (year: number): IFiltersAction => {
  return {
    type: TOGGLE_YEAR,
    payload: year
  }
}

export const toggleSuccessfulLaunchAction = (): IFiltersAction => {
  return {
    type: TOGGLE_SUCESSFUL_LAUNCH
  }
}


export const toggleSuccessfulLandingAction = (): IFiltersAction => {
  return {
    type: TOGGLE_SUCESSFUL_LANDING
  }
}
