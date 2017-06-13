import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"
import UserService from "./UserService";
import PostsService from "./PostsService";

import "./user-page.scss";


export default class UserPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: null,
            posts: []
        };

        if(props.selectedUser) {
            this.getDataForUser(props.selectedUser);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedUser) {
            this.getDataForUser(nextProps.selectedUser)
        }
    }

    getDataForUser(id){
        this.getUser(id);
        this.getPosts(id);
    }

    getUser(id) {
        UserService.getUser(id)
            .then( this.onUser.bind(this) );
    }

    onUser(user){
        this.setState({ user });
    }

    getPosts(id){
        PostsService.getPosts(id)
            .then( this.onPosts.bind(this) )
    }

    onPosts(posts){
        this.setState({ posts });
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <UserPosts posts={ this.state.posts }/>
                </main>)
    }
}
