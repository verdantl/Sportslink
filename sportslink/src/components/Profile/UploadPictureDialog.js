import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ImageUploader from 'react-images-upload'

class UploadPictureDialog extends React.Component{


    render(){
        return <div>
            <Dialog open={this.props.open} close={this.props.close}>
            <DialogTitle > Upload Profile Picture </DialogTitle>
            <ImageUploader
                withIcon={true}
                buttonText='Choose Image'
                onChange={this.props.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </Dialog>
        </div>
    }
}

export default UploadPictureDialog