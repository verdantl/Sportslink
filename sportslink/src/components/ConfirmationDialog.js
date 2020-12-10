import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ConfirmationDialog extends React.Component{
    render(){
        return <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{this.props.confirmation.title}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {this.props.confirmation.description}
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={this.props.handleAgreeClose} color="primary">
        Confirm
        </Button>
        <Button onClick={this.props.handleCancelClose} color="primary">
        Cancel
        </Button>

        </DialogActions>
        </Dialog>
    }
}

export default ConfirmationDialog