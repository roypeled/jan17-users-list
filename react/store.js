import {createStore} from "redux";
import appReducers from "./reducers";
import LoginService from "./services/LoginService";

const state = {
    loggedInUser: LoginService.get(),
    friends: {
        usersList: [],
        selectedUser: {
            details: null,
            posts: null
        }
    }
};

export default createStore(
    appReducers,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
