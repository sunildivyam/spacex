import { ILaunch, ILaunches } from "../models";

export const GET_LAUNCHES = 'GET_LAUNCHES';

export interface IGetLaunchsAction {
    type: typeof GET_LAUNCHES;
    payload: ILaunches;
}

export const getLaunchesAction = (launches: ILaunches): IGetLaunchsAction => {
    return {
      type: GET_LAUNCHES,
      payload: launches
    };
};

