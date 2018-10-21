import { combineReducers } from 'redux'
import ActiveUserReducer from './activeuser'
import MostActiveUserReducer from './mostactiveuser'

export default combineReducers({
    activeuser: ActiveUserReducer,
    mostactiveuser: MostActiveUserReducer
})