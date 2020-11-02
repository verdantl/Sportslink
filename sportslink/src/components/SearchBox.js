import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBox.css"



class SearchBox extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        checked: {"checkedAthlete": false , "checkedRecruiters": false},
        preferences: []
    }


    handleCheck = (event) => {
        const checkBox = event.target.name

        this.state.checked[checkBox] = event.target.checked
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
        return <div className={this.props.searchBoxClass}>

        <input className="searchTitle" placeholder="Search"/>

        <div className='table'>
        <FormControlLabel className="boxes"
        control={<Checkbox  onChange={ this.handleCheck } name="checkedAthlete" />}
        label="Athletes"
        />

        <FormControlLabel className="boxes"
        control={<Checkbox onChange={ this.handleCheck } name="checkedRecruiters" />}
        label="Recruiters"
        />
        
        <FormControl className = 
        'boxes'
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
        <SearchIcon className="searchButton"/>

        </div>
        <div className="preferences">
         {this.state.preferences.map((preference) => {
             console.log("Hi")
              return <span className='student'>
              {preference + ''} 
            </span>
            }
            )}
        </div>

        </div>

        
    }
}

export default SearchBox