import React from "react";
import UserService from "./UserService";

import "./users-list.scss";

export default class UsersList extends React.Component {

    constructor(){
        super();
        this.getUsers();

        this.state = {
            users: []
        }
    }

    getUsers(){
        UserService.getAllUsers()
            .then( this.onUsers.bind(this) )
    }

    onUsers(usersList){
        this.setState({
            users: usersList
        })
    }

    renderUser(user, i){
        return <li key={i} onClick={ ()=> this.selectUser(user.id) }>{ user.name }</li>
    }

    selectUser(userId){
        this.props.onUserSelected(userId);
    }

    render(){
        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.state.users.map( this.renderUser.bind(this) ) }
                    </ul>
                </nav>)
    }
}
