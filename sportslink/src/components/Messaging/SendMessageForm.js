import React from 'react';
import "./SendMessageForm.css";
import { uid } from 'react-uid';

class SendMessageForm extends React.Component{

    constructor () {
        super()
        this.checkChange = this.checkChange.bind(this)
        this.submitMessage = this.submitMessage.bind(this)

        this.state = {
            message : ''
        }
    }

    render () {
        return (
            <form 
            className="send-message-form"
            onSubmit={this.submitMessage}>
                <input
                onChange={this.checkChange}
                value={this.state.message}
                placeholder="Type your message!"
                type="text"/>
            </form>
        )
    }

    checkChange(e) {
        this.setState({
          message: e.target.value
        })
    }
    
    submitMessage(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
          message: ''
        })
      }

}

export default SendMessageForm