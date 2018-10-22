
import { FETCH_COURSE, FETCH_COURSE_SUCCESS } from '../constants';

const initial_state = {
    fetching: false,
    error: false,
    total:0,
    courses: []
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_COURSE:
            return state;
        case FETCH_COURSE_SUCCESS:   
            return {
                ...state,
                total: action.payload.count,
                courses: action.payload.results
            };            
        default:
            return state;
    }
};