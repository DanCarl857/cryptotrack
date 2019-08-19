import { SUMMARY_DATA_AVAILABLE } from './../constants/types'

let intialState = { data: [], loading: true }

export const summaryReducer = (state = intialState, action) => {
    switch (action.type) {
        case SUMMARY_DATA_AVAILABLE:
            state = { ...state, data: action.data, loading: false };
            return state;
        default:
            return state;
    }
}