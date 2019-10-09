import { combineReducers } from 'redux'

// Reducers
import summaryReducer from './summary.reducer'
import cryptoReducer from './cryptocurrency.reducer'

const rootReducer = combineReducers({
    summaryData: summaryReducer,
    cryptoData: cryptoReducer
})

export default rootReducer