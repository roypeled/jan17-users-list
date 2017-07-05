import React from "react";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

import "./navigation.scss";

class Navigation extends React.Component {
    render(){
        return (<header className="navigation">
                    <NavLink exact to="/" activeClassName="active">About</NavLink>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                </header>);
    }
}

export default withRouter(Navigation);
