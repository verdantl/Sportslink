import React from 'react'
import "./Settings.css"

import Button from "@material-ui/core/Button";

import Input from "../Input/Input.js";

import {getAccount, updateAccount} from "../../actions/user.js";
import { getUser, updateUserInfo } from '../../actions/profiles' 

class Settings extends React.Component{
    constructor(props) {
        super(props);
        this.props.history.push("/settings");
        getAccount(this)
        getUser(this.props.global.state.currentUser, this)
    }

    state = {
        usern: "",
        password: "",
        users: [
            {usern: "user", password: "user"},
            {usern: "admin", password: "admin"}
        ],
        user: {},
        account: {},

        newName:"",
        newEmail:"",
        newPass:"",
        oldPass:"",
        newSport:"",
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

    handleClick = () => {
        updateAccount(this)
        let newInfo = {}
        if (this.state.newName !== ""){
            newInfo.name = this.state.newName
        }
        if (this.state.newSport !== ""){
            newInfo.sports =  this.state.newSport
        }

        updateUserInfo(newInfo, this.state.user.username, this)
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
                        <p>{this.state.user.name}</p>
                        <Input
                            name="newName"
                            onChange={this.handleChange}
                            label="New name"
                        />
                        
                        <h3>Email</h3>
                        <p>{this.state.account.email}</p>

                        <Input
                            name="newEmail"
                            onChange={this.handleChange}
                            label="New email"
                        />

                        <h3>Password</h3>
                        <Input
                            name="oldPass"
                            onChange={this.handleChange}
                            label="Old password"
                            type="password"
                        />

                        <Input
                            name="newPass"
                            onChange={this.handleChange}
                            label="New password"
                            type="password"
                        />
                        <Input
                            name="newPass2"
                            onChange={this.handleChange}
                            label="Type your new password again"
                            type="password"
                        />

                        <h3>Sport</h3>
                        <p>{this.state.user.sports}</p>
                        <Input
                            name="newSport"
                            onChange={this.handleChange}
                            label="New sport"
                        />

                    <br/>
                    <Button
                        variant="contained"
                        onClick={() => this.handleClick()}
                        className="loginButton"
                    > 
                        Update   
                    </Button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings