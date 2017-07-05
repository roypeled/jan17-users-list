import React from "react";
import {logIn} from "../actions/creators";
import {connect} from "react-redux";
import {Redirect} from "react-router";

import "./login.scss";

class Login extends React.Component {

    logIn(){
        this.props.login({name: "Roy Peled"});
    }

    render(){
        if(!this.props.isLoggedIn)
            return (
                <div className="login-window">
                    <button onClick={ ()=> this.logIn() }>Login</button>
                </div>
            );
        else
            return <Redirect to="/"/>
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.loggedInUser
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: user => dispatch( logIn(user) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
