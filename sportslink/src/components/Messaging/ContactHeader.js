import React from 'react';
import './ContactHeader.css';

class ContactHeader extends React.Component{
    render() {
        if (this.props.currContact !== null) {
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