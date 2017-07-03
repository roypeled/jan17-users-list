import React from "react";
import UserPage from "./userPage/UserPage";
import UsersList from "./usersList/UsersList";
import {connect} from "react-redux";
import {Route} from "react-router";

import '../main.scss';

class Users extends React.Component {

    render(){
        return (<div>
                    <UsersList/>
                    <Route path="/users/:id" component={UserPage}/>
                </div>)
    }
}


function mapStateToProps(state){
    return {
        selectedUser: state.friends.selectedUser
    }
}

export default connect(mapStateToProps, null)(Users);
