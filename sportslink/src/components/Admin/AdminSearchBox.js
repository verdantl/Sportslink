import React from 'react'
   
import TextField from '@material-ui/core/TextField'

class AdminSearchBox extends React.Component{
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
        return <div className="adminSearchBox">
        <TextField className="adminSearchBar" label="Search"/>
        </div>
    }   
}

export default AdminSearchBox