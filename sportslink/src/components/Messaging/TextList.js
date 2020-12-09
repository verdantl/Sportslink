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
        console.log(this.props.conversation)
        if (this.props.conversation === "noConv") {
            return (
                <div className="defaultMessage">
                    There's nothing here! Would you like to start a new conversation?
                    <button className="moveButton" onClick={this.moveToSearch}>Click here</button>
                </div>
            )
        } else if (Array.isArray(this.props.conversation.messages)) {
            return (
                <ul>
                    {
                        this.props.conversation.messages === [] ? this.askToSendMessage() : this.props.conversation.messages.map(this.displayMessage)
                    }
                </ul>
            )
        }
        return (
            <div className="defaultMessage">
                I don't know how but I fucked something up
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

    askToSendMessage () {
        return (
            <div className="defaultMessage">
                Neither of you have sent a message yet. Send one now!
            </div>
        )
    }
}

export default TextList