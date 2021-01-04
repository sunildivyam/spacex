import { ILaunches } from "../../models";
import { GET_LAUNCHES, IGetLaunchsAction } from "../actions";

const initialState: ILaunches = {
    launches: [],
    totalCount: 0
};

export const getLaunchesReducer = (state = initialState, action: IGetLaunchsAction): ILaunches => {
    switch(action.type) {
        case GET_LAUNCHES:
            return { 
                ...state, 
                launches: action.payload.launches, 
                totalCount: action.payload.totalCount 
            };
        default:
            return state;
    }
}
