import React from 'react';
import './ContactHeader.css';
import { uid } from 'react-uid';

class ContactHeader extends React.Component{
    render() {
        return (
            <div className="returnDiv">
                <div className="header">
                    <img className="contactImage" src="logo512.png" alt="Profile Pic"></img>
                    <p>{this.props.currContact}</p>
                </div>
                <br/>
                <hr/>
            </div>
        )
    }
}

export default ContactHeader