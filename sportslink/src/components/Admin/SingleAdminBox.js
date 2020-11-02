import React from 'react'
import './SingleAdminBox.css'

class SingleAdminBox extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className="adminBox">
            <div className="adminProfileBox">
            <div className='profilePic'> <img src="logo512.png"/></div>

            <div className='subBox'>
            <p className="adminProfileName"> {this.props.user.name} </p>
            <p className="adminProfileDescription">{this.props.user.description}</p>
            </div>
            </div>
            <div className="adminActions">
                <div className="adminSuspendButton">
                    Suspend
                </div>
                <div className="adminRemoveButton">
                    Remove
                </div>

                <div className="adminEditButton">
                    Edit
                </div>
            </div>
        </div>
    }
}

export default SingleAdminBox