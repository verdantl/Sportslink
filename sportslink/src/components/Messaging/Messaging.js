import React from 'react';
import Contacts from './Contacts';
import TextList from './TextList';
import ContactHeader from './ContactHeader';
import SendMessageForm from './SendMessageForm'
import "./Messaging.css";

class Messaging extends React.Component{

    state = {
        currUser : 'currUserID',
        currContact: 'userIDGoesHere',
        messages : [
            {
                messageID: '100',
                userID: 'UserIDGoesHere',
                messageData: 'This is an incoming message'
            },
            {
                messageID: '101',
                userID: 'currUserID',
                messageData: 'This is an outgoing message'
            }
        ],
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

    render() {
        return <div className="messaging">
            <div className="contacts">
                {
                    // TODO: Add search bar, list of contacts
                }
                <Contacts contacts={this.state.contacts} currUser={this.state.currUser}/>
            </div>
            <div className="rightContent">
                <div className="contactHeader">
                    {
                        //TODO: Finish layout for Contact Header
                    }
                    <ContactHeader currContact={this.state.currContact}/>
                </div>
                <div className="texts">
                    <TextList messages={this.state.messages} currUser={this.state.currUser}/>
                </div>
                <div className="sendMessageForm">
                    <SendMessageForm/>
                </div>
            </div>
        </div>
    }
}
export default Messaging