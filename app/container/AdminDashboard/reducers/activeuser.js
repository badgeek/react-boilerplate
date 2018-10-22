
import { FETCH_ACTIVE_USER, FETCH_ACTIVE_USER_SUCCESS } from '../constants';

const initial_state = {
    fetching: false,
    eerror: false,
    users_data: {
        active_user: 0,
        user_list: []
    }
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_ACTIVE_USER:
            return state;
        case FETCH_ACTIVE_USER_SUCCESS:   
            return {
                ...state,
                users_data: 
                    {   
                        ...state.users_data,
                        active_user: action.payload.count,
                        user_list: action.payload.results                   
                    },                
            };
        default:
            return state;
    }
};