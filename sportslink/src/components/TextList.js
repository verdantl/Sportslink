import React from 'react';
import '../components-css/TextList.css'

class TextList extends React.Component{
    state = {
        currUser: this.props.currUser,
        messages: this.props.messages
    }

    render() {
        return (
            <ul className="temp">
                {this.props.messages.map(this.displayMessage)}
            </ul>
        )
    }

    displayMessage (message) {
        return (
            <li>
                <div>
                    {message.userID}
                </div>
                <div className={message.userID === this.props.currUser ? 'sentMessage' : 'recievedMessage'}>
                    {message.messageData}
                </div>
            </li>
        )
    }
}