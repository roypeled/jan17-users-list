import {combineReducers} from "redux";
import {ADD_USER, ADD_USERS_LIST, REMOVE_USER, SELECT_USER} from "../actions";

function usersListReducer(state = [], action){
    switch (action.type){
        case ADD_USER:
            return [...state, action.user];
        case REMOVE_USER:
            return state.filter(user => user != action.user);
        case ADD_USERS_LIST:
            return [...state, ...action.usersList];
    }

    return state;
}

function selectedUserReducer(state = {}, action){
    switch (action.type){
        case SELECT_USER:
            return { details: action.user };
        case REMOVE_USER:
            return state == action.user? null : state;
    }

    return state;
}

export default combineReducers({
    usersList: usersListReducer,
    selectedUser: selectedUserReducer
});
