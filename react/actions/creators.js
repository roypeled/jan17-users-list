import * as ACTIONS from "./index"

export function addUser(user){
    return { type: ACTIONS.ADD_USER, user };
}

export function addUsersList(usersList){
    return { type: ACTIONS.ADD_USERS_LIST, usersList };
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
