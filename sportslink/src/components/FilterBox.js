import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import SearchIcon from '@material-ui/icons/Search';
import "./FilterBox.css"



class FilterBox extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        checked: {"checkedAthlete": false , "checkedRecruiters": false},
        preferences: []
    }


    handleCheck = (event) => {
        const checkBox = event.target.name

        this.setState.checked[checkBox] = event.target.checked
        console.log(this.state.checked)

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

        console.log(this.state.preferences)
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
                <option value={"Same location"}>Filter preferences</option>
                <option value={"Big brain"}>Big brain       </option>
                <option value={"Same Sport"}>Same Sport </option>
            </Select>
        </FormControl>

        </div>
        <div className="preferences">
         {this.state.preferences.map((preference) => {
              return <span className='preference'>
              {preference + ''} 
            </span>
            }
            )}
        </div>

        </div>

        
    }
}

export default FilterBox