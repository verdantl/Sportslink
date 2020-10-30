import React from 'react';
import '../components-css/TextList.css'

class TextList extends React.Component{
     constructor (props) {
         super(props);

         console.log(props)
     }

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
            <li>
                <div>
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