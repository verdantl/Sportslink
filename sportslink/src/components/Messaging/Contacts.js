import React from 'react';
import "./Contacts.css";
import { uid } from "react-uid";
import { getUsers } from '../../actions/profiles';

class Contacts extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            users: []
        }
        getUsers(this)
    }

    displayContacts = (contact) => {
        return(
            <div key={"contact-" + uid(contact.userID)} id={"contact-" + contact.userID}>
                <div className="contactItem">
                    <img className="contactImage" src={!this.state.users.filter(user => user.username === contact.userID)[0]? null : this.state.users.filter(user => user.username === contact.userID)[0].image} alt="Profile Pic"></img>
                    <h6 className="contactName">{contact.userID}</h6>
                    <hr/>
                    <p className="contactText">{contact.lastMessage.substring(0, Math.min(20, contact.lastMessage.length))}</p>
                </div>
            </div>
        )
    }

    
    render(){
        console.log(this.props.contacts)
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