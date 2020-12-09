import React from 'react'
import Input from '../Input/Input'
import './Signup.css'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { onboard} from "../../actions/user.js";

class Onboarding extends React.Component{
    state = {
        checkedAthlete: false,
        checkedRecruiters: false,
        sport: "",
        organization: "",
        location: "",   
        email: "",

        sportError: "",
        organizationError: "",
        locationError: "",   
        emailError: "",

        users: [
            {usern: "user", password: "user"},
            {usern: "admin", password: "admin"}
        ]
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        let err = ""

        if (value === "") {
            err = "Field cannot be left empty."
        } 
        this.setState({
            [name+"Error"]: err
        });
    };

    handleCheck = (event) => {
        const checkBox = event.target.name

        this.setState({[checkBox] : event.target.checked})
    }

    handleEnter = (event) => {
        if (event.key === 'Enter'){
            const {app} = this.props
            onboard(this, app)
        }
    }

    render(){
        const { app } = this.props
        return <div className="signUpPage">
            <div className="signUpTitle"><h1>Sportslink</h1> <p>Bringing together the greatest athletic community around the globe.</p></div>
        {/* <Onboarding/> */}
        <div className="signUpContainer">
            <h1>Onboarding</h1>
            <Input
                error ={this.state.emailError !== "" ? true : false }
                errorText={this.state.emailError}
                name="email"
                onChange={this.handleChange}
                onKeyPress={this.handleEnter}
                label="Email"
            />

            <Input
                error ={this.state.locationError !== "" ? true : false }
                errorText={this.state.locationError}
                name="location"
                onChange={this.handleChange}
                onKeyPress={this.handleEnter}
                label="Location"
            />

            <Input
                error ={this.state.organizationError !== "" ? true : false }
                errorText={this.state.organizationError}
                name="organization"
                onChange={this.handleChange}
                onKeyPress={this.handleEnter}
                label="Organization"
            />

            <Input
                error ={this.state.sportError !== "" ? true : false }
                errorText={this.state.sportError}
                name="sport"
                onChange={this.handleChange}
                onKeyPress={this.handleEnter}
                label="Sport"
            />
                
            <FormControl required error={[this.state.checkedAthlete, this.state.checkedRecruiters].filter((v) => v).length !== 1}>
                <FormControlLabel className="filterboxes"
                    control={<Checkbox  onChange={ this.handleCheck } name="checkedAthlete" />}
                    label="Athlete"
                />

                <FormControlLabel className="filterboxes"
                    control={<Checkbox onChange={ this.handleCheck } name="checkedRecruiters" />}
                    label="Recruiter"
                />
                <FormHelperText>Please choose one.</FormHelperText>
            </FormControl>
            
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