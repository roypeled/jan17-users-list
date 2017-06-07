import React from "react";

import "./users-list.scss";

export default class UsersList extends React.Component {

    constructor(props){
        super(props);
        this.getUsers();
    }

    getUsers(){
        this.users = [
            {name: "Roy Peled"},
            {name: "Peter Parker"},
            {name: "Tony Stark"},
        ];
    }

    renderUser(user){
        return <li>{ user.name }</li>
    }

    render(){
        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.users.map(this.renderUser) }
                    </ul>
                </nav>)
    }
}
