'use strict';
const mongoose = require('mongoose');
/*
    messages: [
        {
            messageID: 102,
            userID: 'UserIDGoesHere2',
            messageData: 'This is an incoming message'
        },
        {
            messageID: 103,
            userID: 'currUserID',
            messageData: 'This is an outgoing message'
        }
    ]
*/

// Schema used for messages.
const MessageSchema = new mongoose.Schema({
    sentUsername: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    messageData: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    sentDate: {
        type: Date,
        required: true
    }
})

// Schema used for conversations
const ConversationSchema = new mongoose.Schema({
    sentUsername: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    toUsername: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    messages: [MessageSchema],
    date: {
        type: Date,
        required: false
    }
})

const Conversation = mongoose.model("conversation", ConversationSchema)

module.exports = { Conversation }