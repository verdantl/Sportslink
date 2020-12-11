import React from 'react';
import './TextList.css';
import { uid } from 'react-uid';

class TextList extends React.Component{

    constructor (props) {
        super(props)
        this.messagesEndRef = React.createRef()
    }


    componentDidMount () {
        this.scrollToBottom()
      }

    componentDidUpdate () {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        if (this.messagesEndRef.current){
            this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }

      }
    moveToSearch = () => {
        // do this later
    }
    

    displayMessage =  (message) => {
        return (
            <li className={message.sentUsername === this.props.currUser ? 'sentTextDiv' : 'receivedTextDiv'} key={"message-" + uid(message._id)}>
                <div className={message.sentUsername === this.props.currUser ? 'sentName' : 'receivedName'}>
                    {message.sentUsername}
                </div>
                <div className={message.sentUsername === this.props.currUser ? 'sentMessage' : 'receivedMessage'}>
                    {message.messageData}
                </div>
            </li>
        )
    }

    askToSendMessage =  () => {
        return (
            <div className="defaultMessage">
                Neither of you have sent a message yet. Send one now!
            </div>
        )
    }

    render() {
         if (Array.isArray(this.props.conversation.messages)) {
            if (this.props.conversation.messages.length === 0) {
                return (
                    <div className="defaultMessage">
                        <div>
                            There's nothing here! Would you like to start a new conversation?
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                    <ul>
                        {
                            this.props.conversation.messages === [] ? this.askToSendMessage() : this.props.conversation.messages.map(this.displayMessage)
                        }
                        <li className="receivedTextDiv" id='refMessage' ref={this.messagesEndRef} />
                    </ul>
                     </div>
                )
            }
        }
        return (
            <div className="defaultMessage">
                I don't know how but I fucked something up
            </div>
        )
    }


}

export default TextList