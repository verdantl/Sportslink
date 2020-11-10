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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class AdminSideFilters extends React.Component{
    state = {
        exitIcon: 'exitIcon'
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
                this.props.filters.locations.splice(this.props.filters.locations.indexOf(object.name), 1)
                this.setState({locations: this.props.filters.locations})
                break;
            case ("organizations"):
                this.props.filters.organizations.splice(this.props.filters.organizations.indexOf(object.name), 1)
                this.setState({organizations: this.props.filters.organizations})
                break;
            case ("sports"):
                this.props.filters.sports.splice(this.props.filters.sports.indexOf(object.name), 1)
                this.setState({sports: this.props.filters.sports})
                break;
          }
          this.props.updatePref(this.props.filters.locations, this.props.filters.organizations, this.props.filters.sports)
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


    handleExitHover = (event) => {
        this.setState({exitIcon: 'exitIconLight'})
    }


    handleExitHoverOff = (event) => {
        this.setState({exitIcon: 'exitIcon'})
    }

    handleClick = (event) => {
        window.location.href = '/';
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
         {this.props.filters.locations.map((location) => {
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
        <div className='logout'>
            <ExitToAppIcon className={this.state.exitIcon} onMouseEnter={this.handleExitHover} onMouseLeave={this.handleExitHoverOff} onClick={this.handleClick}/>
        </div>
        
        </div>

    }
}

export default AdminSideFilters