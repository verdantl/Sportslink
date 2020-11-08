import React from 'react'
import image from '../images/lebron.jpg'

class ProfilePicture extends React.Component{
    
    render(){
        return <div className="profilePictureName">
            <div className="profilePicture">            
            <img src={this.props.image} className="image"
            /></div>

            <div className="profileName">
                 {this.props.name}
            </div>
        </div>
    }
}

export default ProfilePicture