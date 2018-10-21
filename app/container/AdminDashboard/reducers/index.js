import { combineReducers } from 'redux'
import ActiveUserReducer from './activeuser'
import MostActiveUserReducer from './mostactiveuser'
import CourseReducer from './course'

export default combineReducers({
    activeuser: ActiveUserReducer,
    mostactiveuser: MostActiveUserReducer,
    course: CourseReducer
})