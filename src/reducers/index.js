import { combineReducers } from 'redux'

// Reducers
import { summaryReducer } from './summary.reducer'


const rootReducer = combineReducers({
    summaryReducer
})

export default rootReducer