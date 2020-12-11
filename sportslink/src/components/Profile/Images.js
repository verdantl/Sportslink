import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ImageUploader from 'react-images-upload'
import DeleteButton from './DeleteButton'
import ConfirmationDialog from '../ConfirmationDialog'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleIcon from "@material-ui/icons/AddCircle"
import UploadPictureDialog from './UploadPictureDialog'

class Images extends React.Component{    
    constructor(props){
        super(props)

    }
    state = {
        imageNum: 0,
        hideDialog: true,
        hideDelete: true,
        hideAddDialog: true
    }

    nextImage = () => {
        const nextNum = this.state.imageNum + 1;

        if (nextNum >= this.props.images.length){
            this.setState({imageNum: 0})
        }
        else{
            this.setState({imageNum: nextNum});
        }
    }

    previousImage = () => {
        const nextNum = this.state.imageNum - 1;

        if (nextNum < 0){
            this.setState({imageNum: this.props.images.length - 1})
        }
        else{
            this.setState({imageNum: nextNum});
        }
    }


    getHideUploader = () => {
        return this.props.images.length > 0
    }

    deleteImageDialog = () => {
        this.setState({hideDialog: false})
    }

    handleClose = () => {
        this.setState({hideDialog: true})
    }

    handleAgreeClose = () => {
        console.log(this.props.images[this.state.imageNum])
        this.props.removePic(this.props.images[this.state.imageNum])
        this.setState({hideDialog: true})
    }

    handleDisagreeClose = () => {
        this.setState({hideDialog: true})
    }

    showDelete = () => {
        this.setState({hideDelete: false})
    }

    hideDelete = () => {
        this.setState({hideDelete: true})
    }

    handleAddButtonClick = () => {
        this.setState({hideAddDialog: false})
    }

    hideAddDialog = () => {
        this.setState({hideAddDialog: true})
    }

    onDrop(picture) {
        const reader = new FileReader()
        reader.onload = () => {
            this.setState({
                hideAddDialog: true,
            });
            this.props.addPic(reader.result)
        }
        if (picture[0]){
            reader.readAsDataURL(picture[0])
        }

    }
    render(){
        return <div className='profileImages'>

            <div hidden={!this.getHideUploader()} onClick={this.previousImage} className={'leftarrow'}>
            <ArrowLeftIcon className="arrow"/>
            </div>
            <div hidden={this.getHideUploader()}>
            <ImageUploader
                withIcon={true}
                buttonText='Choose Image'
                onChange={this.onDrop.bind(this)}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </div>
            <div hidden={this.state.hideDelete} id="imageDeleteButton" >Delete Image</div>
            <img hidden={this.props.images.length === 0} onClick={this.deleteImageDialog} onMouseEnter={this.showDelete} onMouseLeave={this.hideDelete} src={this.props.images[this.state.imageNum]  ? this.props.images[this.state.imageNum].image : null} className="oneImage"/>
            <div hidden={!this.getHideUploader()}>
            <AddCircleIcon hidden={!this.getHideUploader()} className={"addPictureButton"} onClick={this.handleAddButtonClick}/>
            <UploadPictureDialog open={!this.state.hideAddDialog} text="Upload a new picture" close={this.hideAddDialog} onDrop={this.onDrop.bind(this)} />
            </div>
            <ConfirmationDialog open={!this.state.hideDialog} handleClose={this.handleClose} handleAgreeClose={this.handleAgreeClose} handleCancelClose={this.handleDisagreeClose} confirmation={{title: "Are you sure you want to delete this image?", description: "This action cannot be undone."}}/>
            <div hidden={!this.getHideUploader()} onClick={this.nextImage}className={'rightarrow'}>
            <ArrowRightIcon  className="arrow"/>
            </div>

        </div>
    }
}
export default Images;