import { FreeBreakfastOutlined } from '@material-ui/icons'
import React from 'react'
import './SingleAdminBox.css'

class SingleAdminBox extends React.Component{
    state = {
        suspendClass: "adminSuspendButton",
        removeClass: "adminRemoveButton",
        editClass: "adminEditButton"
    }

    handleButton = (event) => {
        switch (event.target.getAttribute('name')){
            case ('suspendClass'):
                this.setState({suspendClass: 'adminSuspendButtonLight'})
                break;
            case ('removeClass'):
                this.setState({removeClass: 'adminRemoveButtonLight'})
                break;
            case ('editClass'):
                this.setState({editClass: "adminEditButtonLight"})
                break;
            
        }
    }

    handleButtonOff = (event) => {
        switch (event.target.getAttribute('name')){
            case ('suspendClass'):
                this.setState({suspendClass: 'adminSuspendButton'})
                break;
            case ('removeClass'):
                this.setState({removeClass: 'adminRemoveButton'})
                break;
            case ('editClass'):
                this.setState({editClass: "adminEditButton"})
                break;
            
        }
    }

    render(){
        return <div className="adminBox">
            <div className="adminProfileBox">
            <div className='profilePic'> <img src={this.props.user.image}/></div>

            <div className='adminSubBox'>
            <p className="adminProfileName"> {this.props.user.name} </p>
            <p className="adminProfileDescription">{this.props.user.description}</p>
            </div>
            </div>
            <div className="adminActions">
                <div name="suspendClass" className={this.state.suspendClass} onMouseEnter={this.handleButton} onMouseLeave={this.handleButtonOff}>
                    Suspend
                </div>
                <div name="removeClass" className={this.state.removeClass} onMouseEnter={this.handleButton} onMouseLeave={this.handleButtonOff}>
                    Remove
                </div>

                <div name="editClass" className={this.state.editClass} onMouseEnter={this.handleButton} onMouseLeave={this.handleButtonOff}>
                    Edit
                </div>
            </div>
        </div>
    }
}

export default SingleAdminBox