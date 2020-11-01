import React from 'react';
import "./Contacts.css"

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
            <ul id="contactClickForm">
                {
                    this.state.contacts.map(this.displayContacts)
                }
            </ul>
        )
    }

    displayContacts (contact) {
        <li>
            {
                //<ContactButton userID={contact.userID} icon={contact.userID} lastMessage={contact.lastMessage}></ContactButton>
            }
            <div className="contactItem">
                <div className="contactImage"> <img src="logo512.png"></img> </div>
                <h6 className="contactHeader">{contact.userID}</h6>
                <p>{contact.lastMessage}</p>
            </div>
        </li>
    }
}

export default Contacts