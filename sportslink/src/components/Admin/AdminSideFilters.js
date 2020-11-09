import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Input from '../Input/Input'
import TextField from '@material-ui/core/TextField'
import {uid} from 'react-uid'

class AdminSideFilters extends React.Component{
    state = {
        checkedAthlete: false,
        checkedRecruiters: false,
        checkedPosts: false,
        locations: [],
        organizations: [],
        sports:[]
    }
    handleCheck = (event) => {
        const checkBox = event.target.name

        this.setState({checkBox : event.target.checked})

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
        } 
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          switch(e.target.name){
            case ("location"):
                this.addOption(this.state.locations, e.target.value)
                this.setState({locations: this.state.locations})
                break;
            case ("organization"):
                this.addOption(this.state.organizations, e.target.value)
                this.setState({organization: this.state.organizations})
                break;
            case ("sport"):
                this.addOption(this.state.sports, e.target.value)
                this.setState({sports: this.state.sports})
                break;
          }
        }
      }

    render(){
        return <div className="adminLeftColumn">
        Filters
        <div>
        <div>
        <FormControlLabel
        control={<Checkbox  onChange={ this.handleCheck } name="checkedAthlete" />}
        label="Athletes"
        />
        </div>

        <div>
        <FormControlLabel 
        control={<Checkbox onChange={ this.handleCheck } name="checkedRecruiters" />}
        label="Recruiters"
        />
        </div>

        <div>
        <FormControlLabel 
        control={<Checkbox onChange={ this.handleCheck } name="checkedPosts" />}
        label="Posts"
        />
        </div>

        <TextField name="location" label="Location" onKeyDown={this._handleKeyDown}/>
            

        <div className="locations">
         {this.state.locations.map((location) => {
              return <div key={uid(location)} className='choice'>
              {location + ' '} 
            </div>
            }
            )}
        </div>


        <TextField name="organization" label="Organization" onKeyDown={this._handleKeyDown}/>
        <div className="organizations">
        {this.state.organizations.map((organization) => {
              return <div key={uid(organization)} className='choice'>
              {organization + ' '} 
            </div>
            }
            )}
        </div>

        <TextField name="sport" label="Sport" onKeyDown={this._handleKeyDown}/>
        <div className="sports">
        {this.state.sports.map((sport) => {
              return <div key={uid(sport)} className='choice'>
              {sport + ' '} 
            </div>
            }
            )}
        </div>

        </div>

        </div>

    }
}

export default AdminSideFilters