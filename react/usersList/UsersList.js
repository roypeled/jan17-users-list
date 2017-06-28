import React from "react";
import {connect} from "react-redux";
import UserService from "../services/UserService";
import {addUsersList, selectUser} from "../actions/creators";

import "./users-list.scss";

class UsersList extends React.Component {

    constructor(){
        super();

        UserService
            .getAllUsers()
            .then( this.onAllUsers.bind(this) );
    }

    onAllUsers(usersList){
        this.props.addUsers(usersList);
    }

    renderUser(user, i){
        return <li key={i} onClick={ ()=> this.selectUser(user) }>{ user.name }</li>
    }

    selectUser(user){
        this.props.onUserSelected(user);
    }

    render(){
        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.props.users.map( this.renderUser.bind(this) ) }
                    </ul>
                </nav>)
    }
}

function mapStateToProps(state){
    return {
        users: state.friends.usersList
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUsers: (users) => dispatch( addUsersList(users) ),
        onUserSelected: (user) => dispatch( selectUser(user) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
