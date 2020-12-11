import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ImageUploader from 'react-images-upload'

class UploadPictureDialog extends React.Component{


    render(){
        return <div>
            <Dialog className={"uploadPicDialog"} open={this.props.open} onClose={this.props.close}>
    <DialogTitle > {this.props.text} </DialogTitle>
            <ImageUploader
                withIcon={true}
                buttonText='Choose Image'
                onChange={this.props.onDrop}
                imgExtension={['.jpg', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </Dialog>
        </div>
    }
}

export default UploadPictureDialog