import { CRYPTOCURRENCIES_DATA_AVAILABLE, CRYPTOCURRENCIES_DATA_NOT_AVAILABLE } from './../constants/types'

let intialState = { data: [], loading: true }

export const cryptoReducer = (state = intialState, action) => {
    switch (action.type) {
        case CRYPTOCURRENCIES_DATA_AVAILABLE:
            return { ...state, data: action.payload, loading: false }
        case CRYPTOCURRENCIES_DATA_NOT_AVAILABLE:
            return { ...state, data: [], loading: false }
        default:
            return state
    }
}