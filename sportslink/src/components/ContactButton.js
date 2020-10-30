import React from 'react';
import "../components-css/ContactButton.css"

class ContactButton extends React.Component{
    render(){
        return <div className='contactBox'>
            <span className='profilePic'> <img src="logo512.png"/></span>

            <div className='subBox'>
                <p className="profileName"> {this.props.userID} </p>
                <p className="profileMessage"> {this.props.lastMessage} </p>
            </div>
        </div>

    }
}

export default ContactButton