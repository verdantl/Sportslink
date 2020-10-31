import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import SearchIcon from '@material-ui/icons/Search';
import "../components-css/SearchBox.css"



class SearchBox extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        athleteChecked: false,
        sponsorChecked: false,
        preferences: []
    }

    handleChange = (event) =>{
        const preference = event.target.value
        console.log(preference)

        if (this.state.preferences.includes(preference)){
            const index = (element) => element != preference
            this.state.preferences = this.state.preferences.filter(index)
        }
        else{
            this.state.preferences.push(preference)
        }
        console.log(this.state.preferences)
    }

    render(){
        return <div className={this.props.searchBoxClass}>
        <div className="searchTitle">
            <p className="garamond"> Search</p>
        </div>
        <FormControlLabel className="boxes"
        control={<Checkbox  name="checkedAthlete" />}
        label="Athletes"
        />

        <FormControlLabel className="boxes"
        control={<Checkbox name="checkedRecruiters" />}
        label="Recruiters"
        />
        
        <FormControl className='boxes'>
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
        <SearchIcon className="searchButton"/>


        </div>

        
    }
}

export default SearchBox