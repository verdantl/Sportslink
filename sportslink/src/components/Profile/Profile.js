import React from 'react'
import ProfilePicture from './ProfilePicture'
import Biography from './Biography'
import Images from './Images'
import Career from './Career'
import PersonalInfo from './PersonalInfo'
import './profile.css'
import coolcat from '../images/coolcat.jpg'
import icedragon from '../images/icedragon.jpg'
import lebron from '../images/lebron.jpg'

class Profile extends React.Component{
    state = {
        images: [coolcat, icedragon],
        user: {
            name: "Lebron James",
            image: lebron,
            description: "Stuff",
            location: "Los Angeles, California",
            organization: "Los Angeles Lakers",
            sports:"Basketball",
            contact: "",
            accomplishments: ["4x NBA Champion", '4x NBA Finals MVP', '4x NBA MVP', '16x NBA All Star', '13x All-NBA First Team']
            }
    }
    render(){
        return <div className="profile">
            <div className="profileCard">
            <div className="profileInfo">
            <ProfilePicture image={this.state.user.image} name={this.state.user.name}/>
            
            <div className="contactDetails"> 
            <div className="contact">Contact </div>
            <PersonalInfo user={this.state.user}/>
            </div>
            
            </div>
            <Biography/>
            </div>

            <div className="achievements">

                <Images images={this.state.images}/>
                <Career accomplishments={this.state.user.accomplishments}/>
            </div>
        </div>
    }
}

export default Profile