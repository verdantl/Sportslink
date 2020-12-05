import React from 'react'
import Input from '../Input/Input'
import './Signup.css'
import Button from '@material-ui/core/Button'
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { onboard} from "../../actions/user.js";

class Onboarding extends React.Component{
    state = {
        checkedAthlete: false,
        checkedRecruiters: false,
        sport: '',
        organization: "",
        location: "",   
        email: '',
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

    handleCheck = (event) => {
        const checkBox = event.target.name

        this.setState({[checkBox] : event.target.checked})
    }

    render(){
        const { app } = this.props
        return <div className="signUpPage">
            <div className="signUpTitle"><h1>Sportslink</h1> <p>Bringing together the greatest athletic community around the globe.</p></div>
        {/* <Onboarding/> */}
        <div className="signUpContainer">
            <h1>Onboarding</h1>
            <Input
                name="email"
                onChange={this.handleChange}
                label="Email"
            />

            <Input
                name="location"
                onChange={this.handleChange}
                label="Location"
            />

            <Input
                name="organization"
                onChange={this.handleChange}
                label="Organization"
            />

            <Input
                name="sport"
                onChange={this.handleChange}
                label="Sport"
            />
                

            <FormControlLabel className="filterboxes"
                control={<Checkbox  onChange={ this.handleCheck } name="checkedAthlete" />}
                label="Athlete"
            />

            <FormControlLabel className="filterboxes"
                control={<Checkbox onChange={ this.handleCheck } name="checkedRecruiters" />}
                label="Recruiter"
            />

            
            <br/><br/>
            <Button
                variant="contained"
                onClick={() => onboard(this, app)}
                className="signUpButton"
            > 
                Finish  
            </Button>

        </div>
    </div>
    }
}

export default Onboarding