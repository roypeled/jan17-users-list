import * as ACTIONS from "./index";
import UsersService from "../services/UserService";

export function addUser(user){
    return { type: ACTIONS.ADD_USER, user };
}

export function removeUser(user){
    return { type: ACTIONS.REMOVE_USER, user };
}

export function selectUser(user){
    return { type: ACTIONS.SELECT_USER, user };
}

export function logIn(user){
    return { type: ACTIONS.LOG_IN, user};
}

export function logOut(){
    return { type: ACTIONS.LOG_OUT };
}

export function setPosts(posts){
    return { type: ACTIONS.SET_POSTS, posts };
}















export function getUsersList(){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USERS_LIST_REQUEST} );

        UsersService.getAllUsers()
            .then( users => dispatch( { type: ACTIONS.GET_USERS_LIST_RESPONSE, users} ) )
    }
}

