import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"

import PostsService from "../../services/PostsService";
import UserService from "../../services/UserService";

import "./user-page.scss";


export default class UserPage extends React.Component {

    constructor({match}){
        super();

        this.state = {
            user: null,
            posts: null
        };

        if( match.params.id ){
            this.getPosts(match.params.id);
            this.getUser(match.params.id);
        }
    }

    componentWillReceiveProps( {match} ){
        if( match.params.id ){
            this.getPosts(match.params.id);
            this.getUser(match.params.id);
        }
    }

    getPosts(userId){
        PostsService
            .getPosts(userId)
            .then( this.onPosts.bind(this) )
    }

    getUser(userId){
        UserService
            .getUser(userId)
            .then( this.onUser.bind(this) )
    }

    onPosts(posts){
        this.setState({ posts })
    }

    onUser(user){
        this.setState({ user })
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <UserPosts posts={ this.state.posts }/>
                </main>)
    }
}
