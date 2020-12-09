import React from 'react'
import image from '../images/lebron.jpg'

class ProfilePicture extends React.Component{
    state = {
        hovered: false
    }

    setHovered = () => {
        this.setState({hovered: !this.state.hovered})
    }
    
    getHovered = () => {
        return this.state.hovered
    }
    
    changeProfilePicture = () => {

    }
    
    render(){
        return <div className="profilePictureName">
            <div className="profilePicture" >            
            <img id="selfProfilePic" src={this.props.image} className="image" onClick={this.changeProfilePicture} onMouseEnter={this.setHovered}  onMouseLeave={this.setHovered}/>
            <div className="changePicText" hidden={!this.getHovered()}>
                Change Profile Picture
                </div>
            </div>


            <div className="profileName">
                 {this.props.name}
            </div>
        </div>
    }
}

export default ProfilePicture