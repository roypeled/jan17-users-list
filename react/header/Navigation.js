import React from "react";
import {Link} from "react-router-dom";

import "./navigation.scss";

export default class Navigation extends React.Component {
    render(){
        return (<header className="navigation">
                    <Link to="/">About</Link>
                    <Link to="/users">Users</Link>
                </header>);
    }
}
