import React from 'react'
import Input from '../Input/Input'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom";
import './Signup.css'
import { signupNext} from "../../actions/user.js";

class Signup extends React.Component{
    state = {
        firstName: '',
        last_name: '',
        usern: "",
        password: "",   
        users: [
            {usern: "user", password: "user"},
            {usern: "admin", password: "admin"}
        ]
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // console.log(name)

        this.setState({
            [name]: value
        });
    };


    render(){
        const {app} = this.props;
        return <div className="signUpPage">
            <div className="signUpTitle"><h1>Sportslink</h1> <p>Bringing together the greatest athletic community around the globe.</p></div>
        {/* <Onboarding/> */}
        <div className="signUpContainer">
            <h1>Sign Up</h1>
            <Input
                className="signUpNames"
                name="firstName"
                onChange={this.handleChange}
                label="First Name"
            />
            <Input
                className="signUpNames"
                name="last_name"
                onChange={this.handleChange}
                label="Last Name"
            />

            <Input
                name="usern"
                onChange={this.handleChange}
                label="Username"
            />

            <Input
                name="password"
                onChange={this.handleChange}
                label="Password"
                type="password"
            />

            <Input
                name="password2"
                onChange={this.handleChange}
                label="Re enter password"
                type="password"
            />
            
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