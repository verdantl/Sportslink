import React from 'react'
   
import TextField from '@material-ui/core/TextField'

class AdminSearchBox extends React.Component{

    render(){
        return <div className="adminSearchBox">
        <TextField className="adminSearchBar" label="Search"/>
        </div>
    }   
}

export default AdminSearchBox