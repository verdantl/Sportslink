import React from 'react'
import Input from '../Input/Input'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom";
import './Signup.css'
import { signupNext, getAccount} from "../../actions/user.js";

class Signup extends React.Component{
    state = {
        firstName: '',
        last_name: '',
        usern: "",
        password: "", 
        password2: "", 

        firstNameError: "",
        last_nameError: "",
        usernError: "",
        passwordError: "", 
        password2Error: "",   

        account: {},

        users: [
            {usern: "user", password: "user"},
            {usern: "admin", password: "admin"}
        ]
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        let err = ""

        if (name === "usern" && value !== "") {
            getAccount(value ,this)
        }
        if (value === "") {
            err = "Field cannot be left empty."
        } else {
            if ((name === "password" || name === "password2") && value.length < 4) {    
                err = "Password must be at least 4 characters."
            } else if (name === "password2" && this.state.password !== value) {
                err = "Passwords do not match."
            } else if (this.state.password === this.state.password2) {
                this.setState({
                    ["passwordError"]: "",
                    ["password2Error"]: ""
                });
            } 
            
        }

        this.setState({
            [name+"Error"]: err
        });
    };

    checkUsername = () =>{
        let error = ""

        if (Object.keys(this.state.account).length !== 0) {
            error = "Username already taken."
        } 

        this.setState({
            ["usernError"]: error
        });
    }

    handleEnter = (event) => {
        if (event.key === 'Enter'){
            const {app} = this.props
            signupNext(this, app)
        }
    }

    render(){
        const {app} = this.props;
        return <div className="signUpPage">
            <div className="signUpTitle"><h1>Sportslink</h1> <p>Bringing together the greatest athletic community around the globe.</p></div>
        {/* <Onboarding/> */}
        <div className="signUpContainer">
            <h1>Sign Up</h1>
            <div className="inputContainer">
                <div>
                    <Input
                        error ={this.state.firstNameError !== "" ? true : false }
                        className="signUpNames"
                        name="firstName"
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        label="First Name"
                        errorText={this.state.firstNameError}
                    />
                    <Input
                        error ={this.state.last_nameError !== "" ? true : false }
                        className="signUpNames"
                        name="last_name"
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        label="Last Name"
                        errorText={this.state.last_nameError}
                    />

                    
                    <Input
                        error ={this.state.usernError !== "" ? true : false }
                        name="usern"
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        label="Username"
                        errorText={this.state.usernError}
                    />

                    <Input
                        error ={this.state.passwordError !== "" ? true : false }
                        name="password"
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        label="Password"
                        type="password"
                        errorText={this.state.passwordError}
                    />

                    <Input
                        error ={this.state.password2Error !== "" ? true : false }
                        name="password2"
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        label="Re enter password"
                        type="password"
                        errorText={this.state.password2Error}
                    />
                </div>
                <div className="checkContainer">
                    <Button
                        variant="contained"
                        onClick={this.checkUsername}
                        className="checkButton"
                    > 
                        Check  
                    </Button>
                </div>
            </div>
            
            <br/>
            <Button
                variant="contained"
                onClick={() => signupNext(this, app)}
                className="signUpButton"
            > 
                Next  
            </Button>

            <br/><br/>
            <Link to="/">Already have an account?</Link>
        </div>
    </div>
    }
}

export default Signup