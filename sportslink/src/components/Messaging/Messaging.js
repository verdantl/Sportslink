import React from 'react';
import TextList from './TextList';
import Contacts from './Contacts';
import "./Messaging.css";

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
                <Contacts messages={this.state.messages} currUser={this.state.currUser}/>
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