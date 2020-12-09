import React from 'react';
import Contacts from './Contacts';
import TextList from './TextList';
import ContactHeader from './ContactHeader';
import SendMessageForm from './SendMessageForm'
import "./Messaging.css";
import { getConversations, createNewMessage } from '../../actions/conversations'

// TODO: Fix issue where switching contacts with the same text filled in the send message box carries over

class Messaging extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            currUser : 'arjun',
            currContact: 'UserIDGoesHere1',
            conversations: [],
            contacts: []
        }
        getConversations(this)
        this.setContacts()
        console.log(this.state.conversations)
    }

    contactClick = (e) => {
        e.preventDefault();
        // Check if the contact clicked is a different contact than what is currerntly being displayed
        let target = e.target.parentElement.id
        if (target === '') {
            target = e.target.parentElement.parentElement.id
        }

        if (target === 'contact-' + this.state.currContact){
            return
        } else if (target === '') {
            return
        } else {
            this.setState({currContact : target.slice(8)})
        }
    }

    setContacts = () => {
        let contacts = []
        for (let i = 0; i < this.state.conversations.length; i++) {
            contacts.push({ userID: this.state.conversations[i].toUsername, icon: '', lastMessage: this.state.conversations[i].messages[0].messageData })
        }
        this.setState({contacts: contacts})
    }

    conversationFilter = (conversation) => {
        return conversation.toUsername === this.state.currContact
    }

    sendMessage = (message) => {
        createNewMessage(this.state.currUser, this.state.currContact, this.state.messageData, this)
        this.setContacts(this.state.conversations)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState === this.state) {
            return false
        } else if (nextProps === this.props) {
            return false
        }
        return true
    }

    render() {
        return <div className="messaging">
            <div className="contacts" onClick={this.contactClick}>
                {
                    // TODO: Add search bar
                }
                <Contacts contacts={this.state.contacts} currUser={this.state.currUser}/>
            </div>
            <div className="rightContent">
                <div className="contactHeader">
                    {
                        // TODO: Finish layout for Contact Header
                    }
                    <ContactHeader currContact={this.state.currContact}/>
                </div>
                <div className="texts">
                    <TextList conversation={this.state.conversations.filter(this.conversationFilter)} currUser={this.state.currUser}/>
                </div>
                <div className="sendMessageForm">
                    <SendMessageForm sendMessage={this.sendMessage}/>
                </div>
            </div>
        </div>
    }
}
export default Messaging

// The following is an example state
// conversations: [
        //     'UserIDGoesHere1': [
        //         {
        //             messageID: 100,
        //             userID: 'UserIDGoesHere1',
        //             messageData: 'This is an incoming message'
        //         },
        //         {
        //             messageID: 101,
        //             userID: 'currUserID',
        //             messageData: 'This is an outgoing message'
        //         }
        //     ],
        //     'UserIDGoesHere2': [
        //         {
        //             messageID: 102,
        //             userID: 'UserIDGoesHere2',
        //             messageData: 'This is an incoming message'
        //         },
        //         {
        //             messageID: 103,
        //             userID: 'currUserID',
        //             messageData: 'This is an outgoing message'
        //         },
        //         {
        //             messageID: 104,
        //             userID: 'currUserID',
        //             messageData: 'This is another outgoing message'
        //         },
        //         {
        //             messageID: 105,
        //             userID: 'UserIDGoesHere2',
        //             messageData: 'Bruh'
        //         }
        //     ]
        // ],
        // contacts: [
        //     {
        //         userID: 'UserIDGoesHere1',
        //         icon: '',
        //         lastMessage: 'This was the last message sent by UserIDGoesHere1'
        //     },
        //     {
        //         userID: 'UserIDGoesHere2',
        //         icon: '',
        //         lastMessage: 'This was the last message sent by UserIDGoesHere2'
        //     }
        // ]