import React from 'react';
import './TextList.css';
import { uid } from 'react-uid';

class TextList extends React.Component{

    constructor (props) {
        super(props)
    }

    moveToSearch() {
        // do this later
    }

    render() {
        if (Array.isArray(this.props.conversation.messages)) {
            return (
                <ul>
                    {
                        this.props.conversation.messages.map(this.displayMessage)
                    }
                </ul>
            )
        }
        return (
            <div className="nothingHere">
                There's nothing here! Would you like to start a new conversation?
                <button className="moveButton" onClick={this.moveToSearch}>Click here</button>
            </div>
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