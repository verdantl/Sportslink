import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from '@material-ui/core/TextField'
import {uid} from 'react-uid'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
;
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class AdminSideFilters extends React.Component{
    state = {

        locations: [],
        organizations: [],
        sports:[]
    }
    handleCheck = (event) => {
        this.props.changeFilter(event.target.value)
      };

    removePreference = (event) => {
        let object;
        if (event.target.name == null){
            object = event.target.parentElement.parentElement  
        }
        else{
            object = event.target
        }
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
        return <div className="adminLeftColumn">
        <div>
        <div>
        <FormControl component="fieldset">
        <FormLabel component="legend">Filter</FormLabel>
            <RadioGroup aria-label="filters" name="filters" value={this.props.filter} onChange={this.handleCheck}>
                <FormControlLabel value="athlete" control={<Radio />} label="Athletes" />
                <FormControlLabel value="sponsor" control={<Radio />} label="Sponsors" />
                <FormControlLabel value="posts" control={<Radio />} label="Posts" />
            </RadioGroup>
        </FormControl>
        </div>

        <TextField name="location" label="Location" onKeyDown={this._handleKeyDown}/>
            

        <div className="locations">
         {this.state.locations.map((location) => {
              return <div key={uid(location)} className='choice'>
              {location + ' '} <IconButton
                        name={location}
                        onClick={this.removePreference}
                    > 
                    <ClearIcon/>   
                    </IconButton>
            </div>
            }
            )}
        </div>


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

    }
}

export default AdminSideFilters