import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

class DeleteButton extends React.Component{

    render(){
        return <DeleteIcon 
        className={'deleteButton'}
        onClick={this.props.handleRemoveButtonClick}   
        />
    }
}

export default DeleteButton