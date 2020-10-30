import React from 'react';
import TopBar from './TopBar';
import TextList from './TextList';
import "../components-css/Messaging.css"

class Messaging extends React.Component{

    state = {
        currUser : 'currUserID',
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
        ]
    }

    render() {
        return <div className="messaging">
            <div className="contacts">
                {
                    // TODO: Add search bar, list of contacts
                    // TODO: Finish layout for contacts
                }
                
            </div>
            <div className="texts">
                {
                    // TODO: Autogenerate texts through backend
                    // TODO: Finish layout for texts
                }
                <TextList messages={this.messages} currUser={this.currUser}/>
            </div>
            <div className="sendMessageForm">
                {
                    // TODO: Finish layout for sendMessageForm
                }
            </div>
        </div>
    }
}