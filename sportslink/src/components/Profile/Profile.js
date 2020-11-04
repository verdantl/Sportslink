import React from 'react'
import ProfilePicture from './ProfilePicture'
import Biography from './Biography'
import Images from './Images'
import Career from './Career'
import './profile.css'
import coolcat from '../images/coolcat.jpg'
import icedragon from '../images/icedragon.jpg'


class Profile extends React.Component{
    state = {
        images: [coolcat, icedragon]
    }
    render(){
        return <div className="profile">
            <div className="profileCard">
            <div className="profileInfo">
            <ProfilePicture />
            
            <div className="contactDetails"> 
            <div className="contact">Contact </div>
            <div className="personalInfo">Location</div>
            </div>
            
            </div>
            <Biography/>
            </div>

            <div className="achievements">

                <Images images={this.state.images}/>
                <Career/>
            </div>
        </div>
    }
}

export default Profile