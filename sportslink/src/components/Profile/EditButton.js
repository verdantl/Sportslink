import React from 'react'
import Edit from '@material-ui/icons/Edit'

class EditButton extends React.Component{
    state = {
        editButtonClass: 'editButton',
    }

    handleEditButtonOn = (event) => {
        this.setState({editButtonClass: 'editButtonLight'})

    }

    handleEditButtonOff = (event) => {
        this.setState({editButtonClass: 'editButton'})

    }

    render(){
        return <Edit 
        className={this.state.editButtonClass} 
        onMouseEnter={this.handleEditButtonOn} 
        onMouseLeave={this.handleEditButtonOff}/>
    }
}

export default EditButton