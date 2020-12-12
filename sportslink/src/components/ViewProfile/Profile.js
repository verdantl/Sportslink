import React from 'react'
import ProfilePicture from './ProfilePicture'
import Biography from './Biography'
import Images from './Images'
import Career from './Career'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import './viewProfile.css'
import { getUser } from '../../actions/profiles'
import {createNewConversation} from '../../actions/conversations'
class ViewProfile extends React.Component{
    constructor(props){
        super(props)
        getUser(this.props.match.params.username, this)
    }

    state = {
        currentUser : this.props.currentUser,
        user: {
            experience: [],
            career: [],
            images: [],
        }
    }

    startConversation = () => {
        createNewConversation(this.state.currentUser, this.state.user.username, this)

    }

    render(){
        return <div className={(this.state.user.player) ? "userProfile" : "recruiterProfile"}>
            <div className="profileCard">
                <div className="profileInfo">
                    <ProfilePicture image={this.state.user.image} name={this.state.user.name}/>
                    <div className="contactDetails"> 
                        <div className={"contact"} onClick={this.startConversation} ><p>Contact</p></div>
                        <PersonalInfo user={this.state.user}/>
                    </div>
                </div>
                <Biography description={this.state.user.description}/>
            </div>

            <div className="achievements">
                <div></div>
                <Experience experience={this.state.user.experience}/>
                <div className="profileRightColumn">
                    <Images images={this.state.user.images}/>
                    <Career accomplishments={this.state.user.career}/>
                </div>
            </div>
        </div>
    }
}

export default ViewProfile