import { defaultFilters, IFilters } from "../../models";
import { GET_FILTERS, TOGGLE_YEAR, IFiltersAction, TOGGLE_SUCESSFUL_LAUNCH, TOGGLE_SUCESSFUL_LANDING } from "../actions";

const initialState: IFilters = defaultFilters;

export const getFiltersReducer = (state = initialState, action: IFiltersAction): IFilters => {
    switch (action.type) {
        case GET_FILTERS:
            return {
                ...state,
                ...action.payload
            };
        case TOGGLE_YEAR:
            return {
                ...state,
                selectedYear: action.payload == state.selectedYear ? 0 : action.payload
            };
        case TOGGLE_SUCESSFUL_LAUNCH:
            return {
                ...state,
                successfulLaunch: !state.successfulLaunch
            };
        case TOGGLE_SUCESSFUL_LANDING:
            return {
                ...state,
                successfulLanding: !state.successfulLanding
            };
        default:
            return state;
    }
}
