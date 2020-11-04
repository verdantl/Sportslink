import React from 'react';
import './TextList.css';
import { uid } from 'react-uid';

class TextList extends React.Component{
     constructor (props) {
         super(props);

         console.log(props)
     }

    render() {
        return (
            <div>
                {
                    this.props.messages.map(this.displayMessage)
                }
            </div>
        )
    }

    displayMessage (message) {
        return (
            <div className="textDiv" key={"message-" + uid(message.messageID)}>
                <div className={message.userID === "currUserID" ? 'sentName' : 'recievedName'}>
                    {message.userID}
                </div>
                <div className={message.userID === "currUserID" ? 'sentMessage' : 'recievedMessage'}>
                    {message.messageData}
                </div>
            </div>
        )
    }
}

export default TextList