import React from 'react';
import "./Contacts.css";
import { uid } from "react-uid";

class Contacts extends React.Component{

    constructor (props) {
        super(props)
    }

    displayContacts = (contact) => {
        return(
            <div key={"contact-" + uid(contact.userID)} id={"contact-" + contact.userID}>
                <div className="contactItem">
                    <img className="contactImage" src={contact.icon} alt="Profile Pic"></img>
                    <h6 className="contactName">{contact.userID}</h6>
                    <p className="contactText">{contact.lastMessage}</p>
                    <hr/>
                </div>
            </div>
        )
    }

    
    render(){
        return (
            <div>
                {
                    this.props.contacts.map(this.displayContacts)
                }
            </div>
        )
    }   
}

export default Contacts