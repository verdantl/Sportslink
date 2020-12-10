import React from 'react'
import "./Settings.css"

import Button from '@material-ui/core/Button'
import Input from "../Input/Input.js";

import {getAccount, updateAccount} from "../../actions/user.js";
import { getUser, updateUserInfo } from '../../actions/profiles' 

class Settings extends React.Component{
    constructor(props) {
        super(props);
        this.props.history.push("/settings");
        getAccount(this.props.app.state.currentUser, this)
        getUser(this.props.app.state.currentUser, this)
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
        newPass2:"",
        oldPass:"",
        newSport:"",

        newEmailError:"",
        newPassError:"",
        newPass2Error:"",
        oldPassError:"",

        edit:false
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

    editClick = () => {
        this.setState({
            ["edit"]:true
        });
    }

    render() {
        console.log(this.state)
        let isEdit = this.state.edit;
        return (
            <div>
                {isEdit
                    ?<div className="settingsPage">
                        <div className="settingsBlock">
                            <h1>Settings</h1>
                            <div className="settingsContainer">
                                <h3>Name</h3>
                                <p>{this.state.user.name}</p>
                                <div className="inputContainer">
                                    <Input
                                        name="newName"
                                        onChange={this.handleChange}
                                        label="New name"
                                    />
                                    <div className="updatebuttonContainer">
                                        <Button
                                            variant="contained"
                                            onClick={() => this.handleClick()}
                                            className="updateButton"
                                        > 
                                            Update   
                                        </Button>
                                    </div>
                                </div>
        
                                <h3>Email</h3>
                                <p>{this.state.account.email}</p>
                                <div className="inputContainer">
                                    <Input
                                        name="newEmail"
                                        onChange={this.handleChange}
                                        label="New email"
                                        error ={this.state.newEmailError !== "" ? true : false }
                                        errorText={this.state.newEmailError}
                                    />
                                    <div className="updatebuttonContainer">
                                        <Button
                                            variant="contained"
                                            onClick={() => this.handleClick()}
                                            className="updateButton"
                                        > 
                                            Update   
                                        </Button>
                                    </div>
                                </div>
        
                                <h3>Password</h3>
                                <div className="inputContainer">
                                    <div>
                                    <Input
                                        name="oldPass"
                                        onChange={this.handleChange}
                                        label="Old password"
                                        type="password"
                                        error ={this.state.oldPassError !== "" ? true : false }
                                        errorText={this.state.oldPassError}
                                    />
        
                                    <Input
                                        name="newPass"
                                        onChange={this.handleChange}
                                        label="New password"
                                        type="password"
                                        error ={this.state.newPassError !== "" ? true : false }
                                        errorText={this.state.newPassError}
                                    />
                                    <Input
                                        name="newPass2"
                                        onChange={this.handleChange}
                                        label="Type your new password again"
                                        type="password"
                                        error ={this.state.newPass2Error !== "" ? true : false }
                                        errorText={this.state.newPass2Error}
                                    />
                                    </div>
                                    <div className="updatebuttonContainer">
                                        <Button
                                            variant="contained"
                                            onClick={() => this.handleClick()}
                                            className="updateButton"
                                        > 
                                            Update   
                                        </Button>
                                    </div>
                                </div>
        
                                <h3>Sport</h3>
                                <p>{this.state.user.sports}</p>
                                <div className="inputContainer">
                                    <Input
                                        name="newSport"
                                        onChange={this.handleChange}
                                        label="New sport"
                                    />
                                    <div className="updatebuttonContainer">
                                        <Button
                                            variant="contained"
                                            onClick={() => this.handleClick()}
                                            className="updateButton"
                                        > 
                                            Update   
                                        </Button>
                                    </div>
                                </div>
                            <br/>
                                
                            </div>
                        </div>
                    </div>

                    :<div className="settingsPage">
                        <div className="settingsBlock">
                            <h1>Settings</h1>
                            <div className="settingsContainer">
                                <h3>Name</h3>
                                <p>{this.state.user.name}</p>
        
                                <h3>Email</h3>
                                <p>{this.state.account.email}</p>
        
                                <h3>Password</h3>
        
                                <h3>Sport</h3>
                                <p>{this.state.user.sports}</p>
                            <br/>
                            <Button
                                variant="contained"
                                onClick={() => this.editClick()}
                            > 
                                Edit   
                            </Button>
                                
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Settings