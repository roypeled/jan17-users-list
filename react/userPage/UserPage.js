import React from "react";
import {connect} from "react-redux";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"

import PostsService from "../services/PostsService";
import { setPosts } from "../actions/creators";

import "./user-page.scss";


class UserPage extends React.Component {

    componentWillReceiveProps(nextProps){
        if( this.validateUsers(this.props.user, nextProps.user) )
            this.getPosts(nextProps.user.details.id);
    }

    validateUsers(previousUser, nextUser){
        if(!nextUser || !nextUser.details)
            return false;

        if(!previousUser || !previousUser.details)
            return true;

        return previousUser.details.id != nextUser.details.id;
    }

    getPosts(userId){
        PostsService
            .getPosts(userId)
            .then( this.onPosts.bind(this) )
    }

    onPosts(posts){
        this.props.setPosts(posts);
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.props.user.details }/>
                    <UserPosts posts={ this.props.user.posts }/>
                </main>)
    }
}

function mapDispatchToProps(dispatch){
    return {
        setPosts: posts => dispatch( setPosts(posts) )
    }
}

export default connect(null, mapDispatchToProps)(UserPage);
