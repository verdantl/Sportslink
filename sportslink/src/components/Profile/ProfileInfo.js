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

    handleProfileInfoEditClick = (event) => {
        this.props.setBoxState(6);
    }

    render(){
        const {global} = this.props;
        return  <div className="profileInfo">
        <ProfilePicture image={global.image} changePic={this.props.changePic} name={global.name}/>
            <div className="contactDetails"> 
            <div className="editSection">
            <EditButton handleEditButtonClick={this.handleProfileInfoEditClick.bind(this)} />
            </div>
            <PersonalInfo global={global}/>
            </div>
        </div>
    }
}

export default ProfileInfo;