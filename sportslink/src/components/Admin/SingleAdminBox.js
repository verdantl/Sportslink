import React from 'react'
import './SingleAdminBox.css'
import ConfirmationDialog from '../ConfirmationDialog'
class SingleAdminBox extends React.Component{
    state = {
        openDialog: false,
        name: '',
        suspendClass: "adminSuspendButton",
        removeClass: "adminRemoveButton",
        editClass: "adminEditButton"
    }

    handleButton = (event) => {
        switch (event.target.getAttribute('name')){
            case ('suspend'):
                this.setState({suspendClass: 'adminSuspendButtonLight'})
                break;
            case ('remove'):
                this.setState({removeClass: 'adminRemoveButtonLight'})
                break;
            case ('edit'):
                this.setState({editClass: "adminEditButtonLight"})
                break;
            
        }
    }

    handleButtonOff = (event) => {
        switch (event.target.getAttribute('name')){
            case ('suspend'):
                this.setState({suspendClass: 'adminSuspendButton'})
                break;
            case ('remove'):
                this.setState({removeClass: 'adminRemoveButton'})
                break;
            case ('edit'):
                this.setState({editClass: "adminEditButton"})
                break;
            
        }
    }

    handleClick = (event) => {
        this.setState({name: event.target.getAttribute('name')})
        this.setState({openDialog: true})
    }

    handleEdit = (event) => {
        this.props.history.push('/profile/' + this.props.user.username);
        // window.location.href = '/profile/' + this.props.user.username
    }

    handleAgreeClose = () => {
        this.props.adminAction(this.state.name, this.props.user)
        this.setState({openDialog: false})
    }

    handleDisagreeClose = () => {
        this.setState({openDialog: false})
    }

    suspended = () => {
        if (this.props.user.suspended){
            return "Undo Suspend"
        }
        else{
            return "Suspend"
        }
    }
    handleProfileClick = () => {
        this.props.history.push('/viewprofile/' + this.props.user.username);
        // window.location.href = '/viewprofile/' + this.props.post.user.username
    }

    render(){
        return <div className="adminBox">
            <ConfirmationDialog open={this.state.openDialog} 
            handleAgreeClose={this.handleAgreeClose} 
            handleCancelClose={this.handleDisagreeClose}
            confirmation={{title: "Confirmation", description: "Are you sure?"}}/>
            <div className="adminProfileBox">
            <div className='profilePic' onClick={this.handleProfileClick}> <img src={this.props.user.image}/></div>

            <div className='adminSubBox'>
            <p className="adminProfileName"> {this.props.user.name} </p>
            <p className="adminProfileDescription"> {this.props.user.organization}, {this.props.user.location}</p>
            <p className="adminProfileSport"> {this.props.user.sports}</p>
            </div>
            </div>
            <div className="adminActions">
                <div name="suspend" className={this.state.suspendClass} onMouseEnter={this.handleButton} onMouseLeave={this.handleButtonOff}
                onClick={this.handleClick}>
                    {this.suspended()}
                </div>
                <div name="remove" className={this.state.removeClass} onClick={this.handleClick} onMouseEnter={this.handleButton} onMouseLeave={this.handleButtonOff}>
                    Remove
                </div>

                <div name="edit" onClick={this.handleEdit} className={this.state.editClass} onMouseEnter={this.handleButton} onMouseLeave={this.handleButtonOff}>
                    Edit
                </div>
            </div>
        </div>
    }
}

export default SingleAdminBox