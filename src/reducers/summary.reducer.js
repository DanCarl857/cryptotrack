import { SUMMARY_DATA_AVAILABLE, SUMMARY_DATA_NOT_AVAILABLE } from './../constants/types'

let intialState = { data: [], loading: true }

const summaryReducer = (state = intialState, action) => {
    switch (action.type) {
        case SUMMARY_DATA_AVAILABLE:
            return { ...state, data: action.payload, loading: false }
        case SUMMARY_DATA_NOT_AVAILABLE:
            return { ...state, data: [], loading: false }
        default:
            return state
    }
}

export default summaryReducer