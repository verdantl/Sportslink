import React from 'react'
import UploadPictureDialog from './UploadPictureDialog'

class ProfilePicture extends React.Component{
    state = {
        hovered: false,
        openDialog: false
    }

    setHovered = () => {
        this.setState({hovered: !this.state.hovered})
    }
    
    getHovered = () => {
        return this.state.hovered
    }
    
    changeProfilePicture = () => {
        this.setState({openDialog: true})
    }

    onDrop(picture) {
        const reader = new FileReader()
        reader.onload = () => {
            this.setState({
                openDialog: false,
            });
            this.props.changePic(reader.result)
        }
        reader.readAsDataURL(picture[0])

    }

    closeDialog = () =>{
        this.setState({openDialog: false})
    }

    render(){
        return <div className="profilePictureName">
            <div className="profilePicture" >            
            <img id="selfProfilePic" src={this.props.image} className="image" onClick={this.changeProfilePicture} onMouseEnter={this.setHovered}  onMouseLeave={this.setHovered}/>
            <div className="changePicText" hidden={!this.getHovered()}>
                Change Profile Picture
                </div>
            </div>

            <UploadPictureDialog open={this.state.openDialog} onDrop={this.onDrop.bind(this)}/>


            <div className="profileName">
                 {this.props.name}
            </div>
        </div>
    }
}

export default ProfilePicture