import React from 'react'
import "./Settings.css"

import Button from "@material-ui/core/Button";

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
        
        userName:"Lebron James",
        userEmail:"user@email.com",
        userPass:"user",
        userSport:"Basketball",

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

    render() {
        const {global} = this.props;
        return (
            <div className="settingsPage">
                {/* <div className='loginTitle'><h1>Sportslink</h1><p>Bringing together the greatest athletic community around the globe.</p></div> */}
                <div className="settingsBlock">
                    <h1>Settings</h1>
                    <div className="settingsContainer">
                        <h3>Name</h3>
                        <p>{this.state.userName}</p>
                        <Input
                            name="newName"
                            onChange={this.handleChange}
                            label="New name"
                        />
                        
                        <h3>Email</h3>
                        <p>{this.state.userEmail}</p>

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
                        <p>{this.state.userSport}</p>
                        <Input
                            name="newSport"
                            onChange={this.handleChange}
                            label="New sport"
                        />

                    <br/>
                    <Button
                        variant="contained"
                        onClick={() => change(this)}
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