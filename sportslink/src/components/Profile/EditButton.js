import React from 'react'
import Edit from '@material-ui/icons/Edit'

import ExperienceCard from './ExperienceCard'

import InputBox from './InputBox'

class EditButton extends React.Component{
    state = {
            showInputBox: false
    }


    toggleEditing = (event) =>{
        console.dir('Edit Button Props', this.props)
        this.props.toggleEditing(event);
    }

    render(){

        return(
            <span>
                <Edit 
                    className={'editButton'} 
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