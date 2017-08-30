import React from "react";
import UserPosts from "../users/userPage/UserPosts";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {getPosts, getUsersList} from "../../actions/creators"
import {connect} from "react-redux";
import queryString from 'query-string';


import '../../main.scss';

class Posts extends React.Component {

    constructor(props){
        super(props);
        props.getData(queryString.parse(props.location.search));

        this.state = {
            page:1
        }
    }

    renderUser(user, i){
        return <li key={i}>
            <NavLink to={{ pathname: "/posts", search: "?author=" + user._id }}>{ user.name }</NavLink>
        </li>
    }

    gotoPage(page){
        this.setState({page});
        let filter = queryString.parse(this.props.location.search);
        filter.page = page;
        this.props.getData(filter);
    }

    renderPageButtons(amount){
        if(amount < 2)
            return "";

        let buttons = [];
        for(let i=1; i<=amount; i++) {
            if(i == this.state.page)
                buttons.push(<span key={i}> {i} </span>);
            else
                buttons.push(<button key={i} onClick={ ()=> this.gotoPage(i) }>{i}</button>);
        }

        return buttons;
    }

    render(){
        if(this.props.isLoading || !this.props.posts)
            return <div>Loading...</div>;

        return (
            <div>
                <nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        <li>
                            <NavLink to="/posts">Clear</NavLink>
                        </li>
                        { this.props.users.map( this.renderUser.bind(this) ) }
                    </ul>
                </nav>
                <main className="user-page">
                    <UserPosts posts={ this.props.posts.docs }/>

                    <div>
                        { this.renderPageButtons(this.props.posts.pages) }
                    </div>
                </main>
            </div>)
    }
}

function mapStateToProps(state){
    return {
        isLoading: state.postsPage.loading || state.friends.isLoading,
        users: state.friends.usersList,
        posts: state.postsPage.posts
    }
}

function mapDispatchToProps(dispatch){
    return {
        getData: filter => {
            dispatch( getPosts(filter) );
            dispatch( getUsersList() );
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
