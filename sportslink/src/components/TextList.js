import React from 'react';
import '../components-css/TextList.css'

class TextList extends React.Component{
    state = {
        currUser: this.props.currUser
    }

    render() {
        return (
            <ul className="temp">
                {this.props.messages.map(message => {
                    <li>
                        <div>
                            {message.userID}
                        </div>
                        <div className={userID === currUser ? 'sentMessage' : 'recievedMessage'}>
                            {message.messageData}
                        </div>
                    </li>
                })}
            </ul>
        )
    }
}
