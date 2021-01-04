import { IError, IProgress } from "../../models";
import { ERROR, LOADING, IProgressAction } from "../actions";

const initialState: IProgress = {
    error: null,
    loading: true
}

export const getProgressReducer = (state = initialState, action: IProgressAction): IProgress => {
    switch(action.type) {
            case LOADING:
                return { 
                    ...state,
                    loading: action.payload
                };
            case ERROR:
                return { 
                    ...state, 
                    error: action.payload
                };
        default:
            return state;
    }
}
