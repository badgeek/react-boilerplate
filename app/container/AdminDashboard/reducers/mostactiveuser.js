
import { FETCH_MOST_ACTIVE_USER, FETCH_MOST_ACTIVE_USER_SUCCESS } from '../constants';

import { api_result } from '../api/'

const initial_state = {
    fetching: false,
    error: false,
    users_data: {
        active_user: 0,
        user_list: []
    }
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_MOST_ACTIVE_USER:
            return state;
        case FETCH_MOST_ACTIVE_USER_SUCCESS:            
            return {
                ...state,
                users_data: 
                    {   
                        ...state.users_data,
                        active_user: api_result.count,
                        user_list: api_result.results                   
                    },                
            };            
        default:
            return state;
    }
};