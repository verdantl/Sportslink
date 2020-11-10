import React from 'react'
   
import TextField from '@material-ui/core/TextField'

class AdminSearchBox extends React.Component{
    state ={
        search: ''
    }

    handleEnter = (e) => {
        if (e.key === 'Enter'){
            this.props.search(this.state.search)
            this.setState({search: ''})
        }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    render(){
        return <div className="adminSearchBox">
        <TextField 
            className="adminSearchBar" 
            onKeyPress={this.handleEnter} 
            onChange={this.handleChange}
            value={this.state.search}
            label="Search"/>
        </div>
    }   
}

export default AdminSearchBox