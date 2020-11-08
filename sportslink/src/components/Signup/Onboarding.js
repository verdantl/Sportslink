import React from 'react'
import Input from '../Input/Input'
import Button from '@material-ui/core/Button'
class Onboarding extends React.Component{
    state = {
        firstName: '',
        last_name: '',
        usern: "",
        password: "",   
        email: '',
        users: [
            {usern: "user", password: "123"},
            {usern: "admin", password: "123"}
        ]
    };
    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name)

        this.setState({
            [name]: value
        });
    };
    render(){
        return <div>
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
                name="email"
                onChange={this.handleChange}
                label="Email"
            />

            <Input
                name="password"
                onChange={this.handleChange}
                label="Password"
            />
        </div>
    }
}

export default Onboarding