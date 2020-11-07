import React from 'react'
import PersonalInfo from './PersonalInfo'
import ProfilePicture from './ProfilePicture'
import EditButton from "./EditButton"
class ProfileInfo extends React.Component{
    state = {
        contactClass: 'contact',
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
            <EditButton/>
            </div>
            <PersonalInfo user={this.props.user}/>
            </div>
        </div>
    }
}

export default ProfileInfo;