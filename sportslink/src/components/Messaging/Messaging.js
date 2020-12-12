import React from 'react';
import Contacts from './Contacts';
import TextList from './TextList';
import ContactHeader from './ContactHeader';
import SendMessageForm from './SendMessageForm'
import "./Messaging.css";
import { getConversations, createNewMessage } from '../../actions/conversations'
import { getUser, getUsers } from '../../actions/profiles';

// TODO: Fix issue where switching contacts with the same text filled in the send message box carries over

class Messaging extends React.Component{

    constructor(props) {
        super(props)

        getUser(this.props.currentUser, this)
        getUsers(this)
        getConversations(this.props.currentUser, this)
    }

    state = {
        users: [],
        user: {username: ''
            },
        currContact: '',
        currentConversation: {
            messages: [],
            toUsername: '',
            sentUsername: ''
        },
        conversations: [],
        contacts: []
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
            this.setState({currContact : target.slice(8)}, () => {this.setCurrentConversation()})
        }
    }

    setContacts = () => {
        const contacts = []
        for (let i = 0; i < this.state.conversations.length; i++){
            if (this.state.conversations[i].toUsername !== this.state.user.username){
                if (this.state.conversations[i].messages.length === 0){
                    contacts.push({ userID: this.state.conversations[i].toUsername,lastMessage: '' })
                }
                else{
                    contacts.push({ userID: this.state.conversations[i].toUsername, lastMessage: this.state.conversations[i].messages[this.state.conversations[i].messages.length - 1].messageData})
                }
                
            }
            else{

                if (this.state.conversations[i].messages.length === 0){
                    contacts.push({userID: this.state.conversations[i].sentUsername, lastMessage: '' })
                }
                else{
                    contacts.push({ userID: this.state.conversations[i].sentUsername, lastMessage: this.state.conversations[i].messages[this.state.conversations[i].messages.length - 1].messageData})
                }
            }
            
        }
        this.setState({contacts: contacts})
        if (contacts.length > 0){
            this.setState({currContact: contacts[0].userID})
        }
        this.setCurrentConversation()
        this.forceUpdate()
    }

    conversationFilter = (conversation) => {
        return (conversation.toUsername === this.state.currContact || conversation.sentUsername === this.state.currContact) && (conversation.toUsername === this.state.user.username || conversation.sentUsername === this.state.user.username)
    }

    sendMessage = (message) => {
        const conversationID = this.state.conversations.filter(this.conversationFilter)[0]._id
        createNewMessage(this.state.user.username, conversationID, message, this)
        this.setContacts()
    }

    setCurrentConversation = () => {
        const conversation = this.state.conversations.filter(this.conversationFilter)[0]
        
        if (conversation){
            this.setState({currentConversation: conversation})
        }
    }

    contactHeaderClick = () => {
        this.props.history.push('/viewprofile/' + this.state.currContact);
    }

    render() {
        return <div className="messaging">
            <div className="contacts" onClick={this.contactClick}>
                <Contacts contacts={this.state.contacts} currUser={this.state.user.username}/>
            </div>
            <div className="rightContent">
                <div className="contactHeader" onClick={this.contactHeaderClick}>
                    <ContactHeader currContact={this.state.currContact}/>
                </div>
                <div className="texts">
                    <TextList key={this.state.currentConversation} conversation={this.state.currentConversation} currentContact={this.state.currContact} currUser={this.state.user.username}/>
                </div>
                <div className="sendMessageForm">
                    <SendMessageForm sendMessage={this.sendMessage}/>
                </div>
            </div>
        </div>
    }
}
export default Messaging