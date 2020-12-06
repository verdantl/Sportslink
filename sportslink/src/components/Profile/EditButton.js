import React from 'react'
import Edit from '@material-ui/icons/Edit'

import ExperienceCard from './ExperienceCard'

import InputBox from './InputBox'

class EditButton extends React.Component{
    state = {
        editButtonClass: 'editButton',
        showInputBox: false
    }

    handleEditButtonOn = (event) => {
        this.setState({editButtonClass: 'editButtonLight'})
        //console.log("handleEditButtonOn")
    }

    handleEditButtonOff = (event) => {
        this.setState({editButtonClass: 'editButton'})
        console.log("handleEditButtonOff")
    }



    toggleEditing = (event) =>{
        console.dir('Edit Button Props', this.props)
        this.props.toggleEditing(event);
    }

    render(){

        return(
            <span>
                <Edit 
                    className={this.state.editButtonClass} 
                    onMouseEnter={this.handleEditButtonOn} 
                    onMouseDown={this.handleEditButtonOff}
                    onClick={this.props.handleEditButtonClick}
                    />

                <InputBox show={this.state.showInputBox}
                    onClose={this.toggleInputBox}>
                    Placeholder Input Box
                </InputBox>
            </span>
        );
    }

    toggleInputBox = () => {
        this.setState({showInputBox: !this.state.showInputBox});
        console.log("show modal box")
    };
}

export default EditButton