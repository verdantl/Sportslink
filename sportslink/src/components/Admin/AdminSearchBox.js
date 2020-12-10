import React from 'react'
import './AdminDashboard.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class AdminSearchBox extends React.Component{
    state = {
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
                label="Search"
            />
            <div className="searchButtonContainer">
                <Button
                    variant="contained"
                    className="searchButton"
                    onClick={()=>this.props.search(this.state.search)}
                > 
                    Search 
                </Button>
            </div>
        </div>
    }   
}

export default AdminSearchBox