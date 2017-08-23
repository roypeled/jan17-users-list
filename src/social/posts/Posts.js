import React from "react";
import UserPosts from "../users/userPage/UserPosts";
import UsersList from "../users/usersList/UsersList";
import {getPosts} from "../../actions/creators"
import {connect} from "react-redux";

import '../../main.scss';

class Posts extends React.Component {

    constructor(props){
        super(props);
        props.getPosts();
    }

    render(){
        if(this.props.isLoading)
            return <div>Loading...</div>;

        return (
            <div>
                <UsersList/>
                <main className="user-page">
                    <UserPosts posts={ this.props.posts }/>
                </main>
            </div>)
    }
}

function mapStateToProps(state){
    return {
        isLoading: state.postsPage.loading,
        posts: state.postsPage.posts
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPosts: filter => dispatch( getPosts(filter) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
