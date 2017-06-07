import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"

import "./user-page.scss";


export default class UserPage extends React.Component {

    constructor(props){
        super(props);
        this.getUser();
        this.getPosts();
    }

    getUser() {
        this.user = {
            name: "Roy Peled",
            email: "roy@peled.com",
            phone: "555-0816"
        }
    }

    getPosts(){
        this.posts = [
            {title: "hello", body: "world"},
            {title: "lorem", body: "ipsum"},
            {title: "whats", body: "up"},
            {title: "foo", body: "bar"}
        ];
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.user }/>
                    <UserPosts posts={ this.posts }/>
                </main>)
    }
}
