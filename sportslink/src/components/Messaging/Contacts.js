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
                    <h6 className="contactName">{!this.state.users.filter(user => user.username === contact.userID)[0]? null : this.state.users.filter(user => user.username === contact.userID)[0].name}</h6>
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