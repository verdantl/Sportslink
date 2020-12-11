import React from 'react'
import UploadPictureDialog from './UploadPictureDialog'

class ProfilePicture extends React.Component{
    state = {
        hovered: false,
        openDialog: false
    }

    setHovered = () => {
        this.setState({hovered: true})
    }

    setNotHovered = () => {
        this.setState({hovered: false})
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
        if (picture[0]){
            reader.readAsDataURL(picture[0])
        }

    }

    closeDialog = () =>{
        this.setState({openDialog: false})
    }

    render(){
        return <div className="profilePictureName">
            <div className="profilePicture" >            
            <img id="selfProfilePic" src={this.props.image} className="image" onClick={this.changeProfilePicture} onMouseEnter={this.setHovered}  onMouseLeave={this.setNotHovered}/>
            <div className="changePicText" hidden={!this.state.hovered}>
                Change Profile Picture
                </div>
            </div>

            <UploadPictureDialog open={this.state.openDialog} close={this.closeDialog} onDrop={this.onDrop.bind(this)}/>


            <div className="profileName">
                 {this.props.name}
            </div>
        </div>
    }
}

export default ProfilePicture