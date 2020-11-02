import React from 'react'
import ProfilePicture from './ProfilePicture'
import Biography from './Biography'
import Images from './Images'
import Career from './Career'
import './profile.css'


class Profile extends React.Component{
    render(){
        return <div className="profile">
            <ProfilePicture />
            <Biography/>
            <div className="profileDetails">
                <Images/>
                <Career/>
            </div>
        </div>
    }
}

export default Profile