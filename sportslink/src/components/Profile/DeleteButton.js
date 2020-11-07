import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

class DeleteButton extends React.Component{
    state = {
        deleteButtonClass: 'deleteButton',
    }

    handleDeleteButtonOn = (event) => {
        this.setState({deleteButtonClass: 'deleteButtonLight'})

    }

    handleDeleteButtonOff = (event) => {
        this.setState({deleteButtonClass: 'deleteButton'})

    }

    render(){
        return <DeleteIcon 
        className={this.state.deleteButtonClass} 
        onMouseEnter={this.handleDeleteButtonOn} 
        onMouseLeave={this.handleDeleteButtonOff}/>
    }
}

export default DeleteButton