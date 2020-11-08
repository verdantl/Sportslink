import React from 'react';
import './TextList.css';
import { uid } from 'react-uid';

class TextList extends React.Component{
    render() {
        return (
            <ul>
                {
                    this.props.messages.map(this.displayMessage)
                }
            </ul>
        )
    }

    displayMessage (message) {
        return (
            <li className={message.userID === "currUserID" ? 'sentTextDiv' : 'recievedTextDiv'} key={"message-" + uid(message.messageID)}>
                <div className={message.userID === "currUserID" ? 'sentName' : 'recievedName'}>
                    {message.userID}
                </div>
                <div className={message.userID === "currUserID" ? 'sentMessage' : 'recievedMessage'}>
                    {message.messageData}
                </div>
            </li>
        )
    }
}

export default TextList