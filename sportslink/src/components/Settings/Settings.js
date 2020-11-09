import React from 'react'
import "./Settings.css"

import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import Input from "../Input/Input.js";

import {change} from "../../actions/user.js";

class Settings extends React.Component{
    state = {
        usern: "",
        password: "",
        users: [
            {usern: "user", password: "user"},
            {usern: "admin", password: "admin"}
        ],
        user: {
            userName:"user",
            userEmail:"user@email.com",
            userPass:"user",
            userSport:"Sport",

            }
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // console.log(name)

        this.setState({
            [name]:value
        });
    };

    render() {
        const {global} = this.props;
        return (
            <div className="settingsPage">
                {/* <div className='loginTitle'><h1>Sportslink</h1><p>Bringing together the greatest athletic community around the globe.</p></div> */}
                <div className="settingsBlock">
                    <h1>Settings</h1>
                    <div className="settingsContainer">
                        <h3>Name</h3>
                        <p>{this.state.user.userName}</p>
                        <h3>Email</h3>
                        <p>{this.state.user.userEmail}</p>
                        <h3>Password</h3>
                        <p>{this.state.user.userPass}</p>
                        <h3>Sport</h3>
                        <p>{this.state.user.userSport}</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default Settings