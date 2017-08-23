import {combineReducers} from "redux";
import {GET_POSTS_REQUEST, GET_POSTS_RESPONSE} from "../actions";

function postsReducer(state = [], action) {
    switch (action.type){
        case GET_POSTS_RESPONSE:
            return action.posts;
    }

    return state;
}

function loadingReducer(state = false, action) {
    switch (action.type){
        case GET_POSTS_REQUEST:
            return true;
        case GET_POSTS_RESPONSE:
            return false;
    }

    return state;
}

export default combineReducers({
    posts: postsReducer,
    loading: loadingReducer
});
