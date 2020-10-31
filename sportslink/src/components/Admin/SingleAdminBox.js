import React from 'react'
import './SingleAdminBox.css'

class SingleAdminBox extends React.Component{
    render(){
        return <div className="adminBox">
            <div className="adminProfileBox">
            <div className='profilePic'> <img src="logo512.png"/></div>

            <div className='subBox'>
            <p className="adminProfileName"> Username </p>
            <p className="adminProfileDescription"> Description this is a very long long long long long long description</p>
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