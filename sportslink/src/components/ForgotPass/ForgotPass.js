import React from 'react'
import "./ForgotPass.css"

import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import Input from "../Input/Input.js";
import {forgot} from "../../actions/user.js";


class ForgotPass extends React.Component{
    state = {
        usern: "",
        password: "",
        users: [
            {usern: "user", password: "user"},
            {usern: "admin", password: "admin"}
        ],
        email:"",
        emailError: "",
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

    handleEnter = (event) => {
        if (event.key === 'Enter'){
            forgot(this)
        }
    }

    render() {
        return (
            <div className="forgotPage">
                <div className='loginTitle'><h1>Sportslink</h1><p>Bringing together the greatest athletic community around the globe.</p></div>
                <div className="forgotContainer">
                    <h1>Forgot Password?</h1>
                        
                    <p>Please enter your email.</p>
                    <Input
                        name="email"
                        onChange={this.handleChange}
                        label="Enter email"
                        error ={this.state.emailError !== "" ? true : false }
                        errorText={this.state.emailError}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                    />

                    <br/>
                        
                    <Button
                        variant="contained"
                        onClick={() => forgot(this)}
                        className="loginButton"
                        color="primary"
                    > 
                        Send me an email!   
                    </Button>
                        
                    <br/><br/>
                    
                    <Link to="/">
                        <Button
                            variant="contained"
                            className="loginButton"
                        > 
                            Wait, I remember!  
                        </Button>
                    </Link>
                </div>
             </div>
           
        )
    }
}

export default ForgotPass