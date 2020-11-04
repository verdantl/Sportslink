import React from 'react';
import "./Contacts.css";
import { uid } from "react-uid";

class Contacts extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            currUser: "currUserID",
            contacts: [
                {
                    userID: 'UserIDGoesHere1',
                    icon: '',
                    lastMessage: 'This was the last message sent by UserIDGoesHere1'
                },
                {
                    userID: 'UserIDGoesHere2',
                    icon: '',
                    lastMessage: 'This was the last message sent by UserIDGoesHere2'
                }
            ]
        }
    }
    

    render(){
        return (
            <div>
                {
                    this.state.contacts.map(this.displayContacts)
                }
            </div>
        )
    }

    displayContacts (contact) {
        <div key={"contact-" + uid(contact.userID)} >
            {
                //<ContactButton userID={contact.userID} icon={contact.userID} lastMessage={contact.lastMessage}></ContactButton>
            }
            <div className="contactItem">
                <div className="contactImage"> <img src="logo512.png"></img> </div>
                <h6 className="contactHeader">{contact.userID}</h6>
                <p>{contact.lastMessage}</p>
            </div>
        </div>
    }
}

export default Contacts