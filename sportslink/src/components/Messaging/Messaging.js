import React from 'react';
import TextList from './TextList';
import Contacts from './Contacts';
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
                </div>
                <div className="texts">
                    {
                        // TODO: Autogenerate texts through backend
                    }
                    <TextList messages={this.state.messages} currUser={this.state.currUser}/>
                </div>
                <div className="sendMessageForm">
                    {
                        // TODO: Finish layout for sendMessageForm
                    }
                    
                </div>
            </div>
        </div>
    }
}
export default Messaging