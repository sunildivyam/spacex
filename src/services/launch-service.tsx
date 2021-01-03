import { Dispatch } from 'redux';
import { getLaunchesAction, IGetLaunchsAction } from '../store';
import axios, { AxiosResponse } from 'axios';
import { ILaunch, ILaunches, Launch } from '../models';

export const getLaunches = () => {
    const LAUNCHES_URL = 'https://api.spacexdata.com/v3/launches?id=true';

    return new Promise<ILaunches>((resolve, reject) => {
        if (typeof window !== 'undefined' && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__.launches) {
            resolve(window.__PRELOADED_STATE__.launches);
        } else {
            axios.get(LAUNCHES_URL)
            .then((res: AxiosResponse) => {
                const launches: ILaunches = {
                    launches: res.data.map((l: any) => new Launch(l)),
                    totalCount: res.headers['spacex-api-count'] || 0
                };
                resolve(launches);
            })
            .catch(er => {
                reject({} as ILaunches);
            });
        }
    })
}


export const getLaunchesAndDispatch = () => {
    return function (dispatch: Dispatch<IGetLaunchsAction>) {
        getLaunches()
            .then((launches: ILaunches) => {
                dispatch(getLaunchesAction(launches));
                return launches;
            })
            .catch(er => {
                // TODO: Error Handling
            });
    };
};