import React from "react";
import UserPage from "./UserPage";
import UsersList from "./UsersList";

import './main.scss';

export default class App extends React.Component {
    constructor(){
        super();

        this.state = {
            selectedUser: null
        }
    }

    selectUser(selectedUser){
        this.setState({ selectedUser });
    }

    render(){
        return (<div>
                    <UsersList onUserSelected={ this.selectUser.bind(this) } />
                    <UserPage selectedUser={ this.state.selectedUser } />
                </div>)
    }
}
