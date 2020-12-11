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
        const thing = this
        // setInterval( function() {
        //     getConversations(thing.props.currentUser, thing)
        // }, 1000)
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
            console.log("CURRENT CONTACT BEFORE: " + this.state.currContact)
            this.setState({currContact : target.slice(8)}, () => {this.setCurrentConversation()})
        }
    }

    setContacts = () => {
        const contacts = []
        for (let i = 0; i < this.state.conversations.length; i++){
            if (this.state.conversations[i].toUsername !== this.state.user.username){
                let inter = this.state.users.filter(user => user.username === this.state.conversations[i].toUsername);
                let icon;
                if (inter[0]){
                    icon = inter[0].image
                }
                else{
                    icon = null
                }
                if (this.state.conversations[i].messages.length === 0){
                    contacts.push({ userID: this.state.conversations[i].toUsername, icon: icon, lastMessage: '' })
                }
                else{
                    contacts.push({ userID: this.state.conversations[i].toUsername, icon: icon, lastMessage: this.state.conversations[i].messages[0].messageData})
                }
                
            }
            else{
                let inter = this.state.users.filter(user => user.username === this.state.conversations[i].sentUsername)
                let icon;
                if (inter[0]){
                    icon = inter[0].image
                }
                else{
                    icon = null
                }
                if (this.state.conversations[i].messages.length === 0){
                    contacts.push({userID: this.state.conversations[i].sentUsername, icon: icon, lastMessage: '' })
                }
                else{
                    contacts.push({ userID: this.state.conversations[i].sentUsername, icon: icon, lastMessage: this.state.conversations[i].messages[0].messageData})
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
        console.log(this.state.currContact)
        const conversation = this.state.conversations.filter(this.conversationFilter)[0]
        
        if (conversation){
            // if (conversation.toUsername === this.state.user.username){
            //     this.setState({currContact: conversation.sentUsername})
            // }
            // else{
            //     this.setState({currContact: conversation.toUsername})
            // }
            this.setState({currentConversation: conversation})
<<<<<<< HEAD
        }
=======
        }   
>>>>>>> 07d56f92276a95169986d1968ee37c2cfd414197
    }

    render() {
        console.log(this.state.users)
        return <div className="messaging">
            <div className="contacts" onClick={this.contactClick}>
                {
                    // TODO: Add search bar
                }
                <Contacts contacts={this.state.contacts} currUser={this.state.user.username}/>
            </div>
            <div className="rightContent">
                <div className="contactHeader">
                    {
                        // TODO: Finish layout for Contact Header
                    }
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