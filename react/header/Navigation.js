import React from "react";
import {NavLink} from "react-router-dom";

import "./navigation.scss";

export default class Navigation extends React.Component {
    render(){
        return (<header className="navigation">
                    <NavLink exact to="/" activeClassName="active">About</NavLink>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                </header>);
    }
}
