import { IError } from "../../models";

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export interface IProgressAction {
    type: typeof LOADING | typeof ERROR;
    payload?: any
}

export const toggleLoading = (loading: boolean): IProgressAction => {
    return {
      type: LOADING,
      payload: loading
    };
};

export const toggleError = (error: IError | null): IProgressAction => {
  return {
    type: ERROR,
    payload: error
  }
}
