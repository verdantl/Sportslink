import React from 'react';
import ContactButton from './ContactButton';
import "../components-css/Contacts.css"

class Contacts extends React.Component{

    state = {
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

    render(){
        return (
            <ul>
                {
                    this.state.contacts.map(this.displayContacts)
                }
            </ul>
        )
    }

    displayContacts (contact) {
        <li className="contactItem">
            <ContactButton userID={contact.userID} icon={contact.userID} lastMessage={contact.lastMessage}>
            </ContactButton>
        </li>
    }
}

export default Contacts