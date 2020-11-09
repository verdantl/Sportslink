import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import "./FilterBox.css"
import {uid} from 'react-uid'



class FilterBox extends React.Component{
    state = {
        checkedAthlete: false,
        checkedRecruiters: false,
        checkedPosts: false,
        locations: [],
        organizations: [],
        sports: []
    }

    removePreference = (event) => {
        let object;
        if (event.target.name == null){
            object = event.target.parentElement.parentElement  
        }
        else{
            object = event.target
        }
        console.log(object.parentElement)
        switch(object.parentElement.parentElement.className){
            case ("locations"):
                this.state.locations.splice(this.state.locations.indexOf(object.name), 1)
                this.setState({locations: this.state.locations})
                break;
            case ("organizations"):
                this.state.organizations.splice(this.state.organizations.indexOf(object.name), 1)
                this.setState({organizations: this.state.organizations})
                break;
            case ("sports"):
                this.state.sports.splice(this.state.sports.indexOf(object.name), 1)
                this.setState({sports: this.state.sports})
                break;
          }
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

    addOption = (list, option) => {
        if (option != '' && !list.includes(option) && list.length < 5){
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
                value = this.addOption(this.state.locations, e.target.value)
                if (value){
                    this.setState({locations: this.state.locations})
                    e.target.value = null
                }

                break;
            case ("organization"):
                value = this.addOption(this.state.organizations, e.target.value)
                if (value){this.setState({organizations: this.state.organizations})
                e.target.value = null}
                break;
            case ("sport"):
                value = this.addOption(this.state.sports, e.target.value)
                if (value){this.setState({sports: this.state.sports})
                                e.target.value = null}
                break;
          }
        }
      }

    render(){
        return <div className="filterBox">
         Preferences

        <div className='table'>
        <FormControlLabel className="filterboxes"
        control={<Checkbox  onChange={ this.handleCheck } name="checkedAthlete" />}
        label="Athletes"
        />

        <FormControlLabel className="filterboxes"
        control={<Checkbox onChange={ this.handleCheck } name="checkedRecruiters" />}
        label="Recruiters"
        />
        <FormControlLabel className="filterboxes"
        control={<Checkbox onChange={ this.handleCheck } name="checkedPosts" />}
        label="Posts"
        />

        </div>
        <div className="table">
        <div>
        <TextField name="location" label="Location" onKeyDown={this._handleKeyDown}/>
            

        <div className="locations">
            {this.state.locations.map((location) => {
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

        <div>
    
            <TextField name="organization" label="Organization" onKeyDown={this._handleKeyDown}/>
            <div className="organizations">
            {this.state.organizations.map((organization) => {
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
        
        </div>
    
        <div>
            <TextField name="sport" label="Sport" onKeyDown={this._handleKeyDown}/>
            <div className="sports">
            {this.state.sports.map((sport) => {
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