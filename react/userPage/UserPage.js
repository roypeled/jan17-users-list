import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"

import "./user-page.scss";


export default class UserPage extends React.Component {

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.props.user }/>
                    <UserPosts posts={ this.props.posts }/>
                </main>)
    }
}
