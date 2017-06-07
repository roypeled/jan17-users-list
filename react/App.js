import React from "react";
import UserPage from "./UserPage";
import UsersList from "./UsersList";

import './main.scss';

export default class App extends React.Component {
    render(){
        return (<div>
                    <UsersList/>
                    <UserPage/>
                </div>)
    }
}
