import React from 'react'
import image from '../images/colorwolf.jpg'

class ProfilePicture extends React.Component{

    render(){
        return <div className='profilePicture'>
            <img src={image}
            />
            <div className="profileName">
                LeBron James
            </div>
        </div>
    }
}

export default ProfilePicture