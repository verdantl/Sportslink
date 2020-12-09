import React from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import "./FilterBox.css"
import countryData from '../country_data/countries.json'
import {uid} from 'react-uid'



class FilterBox extends React.Component{
        
    removePreference = (event) => {
        let object = event.target
        while (object.getAttribute('name') === null){
            object = object.parentElement
        }
        let locations = this.props.filters.locations
        let organizations = this.props.filters.organizations;
        let sports = this.props.filters.sports;
        switch(object.parentElement.parentElement.className){
            case ("locations"):
                locations = []
                break;
            case ("organizations"):
                organizations = []
                break;
            case ("sports"):
                sports = []
                break;
          }
          this.props.updatePref(locations, organizations, sports)
    }
    handleChange = (event) =>{
        this.props.changeFilter(event.target.value)
    }

    addOption = (list, option) => {
        if (option != '' && !list.includes(option) && list.length < 1){
            list.push(option)
            return true
        } 
        else{
            return false
        }
        
    }
    
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            let value;
          switch(e.target.name){
            case ("location"):
                value = this.addOption(this.props.filters.locations, e.target.value)
                if (value){
                    e.target.value = null
                }

                break;
            case ("organization"):
                value = this.addOption(this.props.filters.organizations, e.target.value)
                if (value){
                e.target.value = null}
                break;
            case ("sport"):
                value = this.addOption(this.props.filters.sports, e.target.value)
                if (value){
                    e.target.value = null}
                break;
          }
          this.props.updatePref(this.props.filters.locations, this.props.filters.organizations, this.props.filters.sports)
        }
      }

    render(){
        return <div className="filterBox">
            <div>
            <h3>Filter by Preference</h3>
            </div>
        <FormControl className="table" component="fieldset">
            <RadioGroup aria-label="filters" name="filters" value={this.props.filter} onChange={this.handleChange} row>
                <FormControlLabel value="athlete" control={<Radio/>} label="Athletes" />
                <FormControlLabel value="sponsor" control={<Radio />} label="Sponsors" />
                <FormControlLabel value="posts" control={<Radio />} label="Posts" />
            </RadioGroup>
        </FormControl>  

        <div className="table">
        <div className="eachFilter" >
        <Autocomplete
            id="combo-box-demo"
            options={countryData}
            getOptionLabel={(option) => option.country}
            onClick={this._handleKeyDown}
            renderInput={(params) => <TextField {...params} name="location" label="Location" onKeyDown={this._handleKeyDown} variant="outlined" />}
            />


        <div className="locations">
            {this.props.filters.locations.map((location) => {
                return <div key={uid(location)} className='choice'>
                {location + ' '}  <IconButton
                        name={location}
                        onClick={this.removePreference}
                    > 
                    <ClearIcon/>   
                    </IconButton>
            </div>
            }
            )}
        </div>
        </div>

        <div className="eachFilter">
    
            <TextField name="organization" label="Organization" onKeyDown={this._handleKeyDown}/>
            <div className="organizations">
            {this.props.filters.organizations.map((organization) => {
                  return <div key={uid(organization)} className='choice'>
                  {organization + ' '} <IconButton
                        name={organization}
                        onClick={this.removePreference}
                    > 
                    <ClearIcon/>   
                    </IconButton>
                </div>
                }
                )}
            </div>
        
        </div >
    
        <div className="eachFilter">
            <TextField name="sport" label="Sport" onKeyDown={this._handleKeyDown}/>
            <div className="sports">
            {this.props.filters.sports.map((sport) => {
                  return <div key={uid(sport)} className='choice'>
                  {sport + ' '} 
                  <IconButton
                        name={sport}
                        onClick={this.removePreference}
                    > 
                    <ClearIcon/>   
                    </IconButton>
                </div>
                }
                )}
            </div>
        </div>
    
        </div>

        </div>

        
    }
}

export default FilterBox