import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import "./FilterBox.css"
import {uid} from 'react-uid'



class FilterBox extends React.Component{
    state = {
        checkedAthlete: false,
        checkedRecruiters: false,
        preferences: []
    }


    handleCheck = (event) => {
        const checkBox = event.target.name

        this.setState({checkBox : event.target.checked})

    }

    handleChange = (event) =>{
        const preference = event.target.value


        if (this.state.preferences.includes(preference)){
            const index = (element) => element != preference
            this.setState({preferences: this.state.preferences.filter(index)})
        }
        else{
            this.state.preferences.push(preference)
            this.setState({preferences: this.state.preferences})
        }

    }

    displayPreferences = () => this.state.preferences.map((d) => <li key={d.name}>{d}</li>);

    render(){
        return <div className="filterBox">
            Search Results

        <div className='table'>
        <FormControlLabel className="filterboxes"
        control={<Checkbox  onChange={ this.handleCheck } name="checkedAthlete" />}
        label="Athletes"
        />

        <FormControlLabel className="filterboxes"
        control={<Checkbox onChange={ this.handleCheck } name="checkedRecruiters" />}
        label="Recruiters"
        />
        
        <FormControl className = 
        'filterboxes'
        >
            <InputLabel>
            Filter preferences
            </InputLabel>
            <Select
                native
                value="Bobby"
                inputProps={{
                name: 'age',
                id: 'age-native-simple',
                }}
                onChange={this.handleChange}
                >
                <option aria-label="None" value="" />
                <option value={"Same Location"}>Same location</option>
                <option value={"Same Sport"}>Same Sport</option>
                <option value={"Same Organization"}>Same Organization</option>
            </Select>
        </FormControl>

        </div>
        <div className="preferences">
         {this.state.preferences.map((preference) => {
              return <span key={uid(preference)} className='preference'>
              {preference + ' '} 
            </span>
            }
            )}
        </div>

        </div>

        
    }
}

export default FilterBox