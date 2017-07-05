import React from "react";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";

import "./navigation.scss";

class Navigation extends React.Component {
    render(){
        return (<header className="navigation">
                    <span>Hello, {this.props.user.name}</span>
                    <NavLink exact to="/" activeClassName="active">About</NavLink>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                </header>);
    }
}

function mapStateToProps(state){
    return {
        user: state.loggedInUser
    }
}

let connected = connect(mapStateToProps, null)(Navigation);

export default withRouter(connected);
