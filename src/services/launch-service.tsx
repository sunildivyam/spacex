import { Dispatch } from 'redux';
import { getLaunchesAction, IGetLaunchsAction, toggleLoading, toggleError, IProgressAction } from '../store';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IError, IFilters, ILaunch, ILaunches, Launch } from '../models';

export function setAxiosDefaults() {
    axios.defaults.baseURL = 'https://api.spacexdata.com/v3';
    axios.defaults.headers.get['Content-Type'] = 'application/json';
}

function getParams(filters: IFilters) {
    const { selectedYear, successfulLaunch, successfulLanding } = filters;
    const params: any = {
        id: true,
        limit: 100,
        filter: 'filter=_id,flight_number,mission_name,mission_id,launch_year,rocket/first_stage/cores/land_success,launch_success,links/mission_patch_small'
    };
    if (selectedYear) {
        params['launch_year'] = selectedYear;
    }

    if (successfulLaunch) {
        params['launch_success'] = successfulLaunch;
    }

    if (successfulLanding) {
        params['land_success'] = successfulLanding;
    }
    
    return params;
}

export const fetchLaunches = (filters: IFilters) => {
    const LAUNCHES_URL = '/launches';

    return new Promise<ILaunches>((resolve, reject) => {
        const isPreloadedStateAvailable = (typeof window !== 'undefined' && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__.launches);

        if (false) {
            resolve(window.__PRELOADED_STATE__.launches);
        } else {
            
            axios.get(LAUNCHES_URL, {
                params: getParams(filters)
            })
            .then((res: AxiosResponse) => {
                const launches: ILaunches = {
                    launches: res.data.map((l: any) => new Launch(l)),
                    totalCount: res.headers['spacex-api-count'] || 0
                };
                resolve(launches);
            })
            .catch(er => {
                reject(er);
            });
        }
    })
}

export const getLaunches = (filters: IFilters) => {
    return function (dispatch: Dispatch<IGetLaunchsAction | IProgressAction>) {
        dispatch(toggleError(null));
        dispatch(toggleLoading(true));

        fetchLaunches(filters)
            .then((launches: ILaunches) => {
                dispatch(getLaunchesAction(launches));
                dispatch(toggleLoading(false));

                return launches;
            })
            .catch((er: AxiosError) => {
                dispatch(getLaunchesAction({ launches: [], totalCount: 0 }));
                dispatch(toggleLoading(false));
                const error: IError = {
                    statusCode: er.code,
                    message: er.message
                }
                dispatch(toggleError(error));
            });
    };
};
