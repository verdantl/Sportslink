import React from 'react';
import './TextList.css';
import { uid } from 'react-uid';

class TextList extends React.Component{
    render() {
        return (
            <ul>
                {
                    this.props.conversation.messages.map(this.displayMessage)
                }
            </ul>
        )
    }

    displayMessage (message) {
        return (
            <li className={message.sentUsername === "currUserID" ? 'sentTextDiv' : 'recievedTextDiv'} key={"message-" + uid(message._id)}>
                <div className={message.sentUsername === "currUserID" ? 'sentName' : 'recievedName'}>
                    {message.sentUsername}
                </div>
                <div className={message.sentUsername === "currUserID" ? 'sentMessage' : 'recievedMessage'}>
                    {message.messageData}
                </div>
            </li>
        )
    }
}

export default TextList