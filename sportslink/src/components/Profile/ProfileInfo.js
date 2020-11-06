import React from 'react'
import PersonalInfo from './PersonalInfo'
import ProfilePicture from './ProfilePicture'
import Edit from "@material-ui/icons/Edit"
class ProfileInfo extends React.Component{
    state = {
        contactClass: 'contact',
        editButtonClass: 'editButton',
    }

    handleEditButtonOn = (event) => {
        this.setState({editButtonClass: 'editButtonLight'})

    }

    handleEditButtonOff = (event) => {
        this.setState({editButtonClass: 'editButton'})

    }

    handleButton = (event) => {
        if (event.target.classList[0] === 'contact'){
            this.setState({contactClass: 'contactLight'})
        }
        else if (event.target.classList[0] === 'contactLight'){
            this.setState({contactClass: 'contact'})
        }

    }

    render(){
        return  <div className="profileInfo">
        <ProfilePicture image={this.props.user.image} name={this.props.user.name}/>
            <div className="contactDetails"> 
            <div className="editSection">
            <Edit className={this.state.editButtonClass} onMouseEnter={this.handleEditButtonOn} onMouseLeave={this.handleEditButtonOff} />
            </div>
            <PersonalInfo user={this.props.user}/>
            </div>
        </div>
    }
}

export default ProfileInfo;