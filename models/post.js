'use strict'
const mongoose = require('mongoose')
// posts: [
//     {user: {name: 'Lebron James', image: lebron, location: "Los Angeles CA, USA",
//     organization: "Los Angeles Lakers",
//     sports:"Basketball",}, text: "Finals MVP, 2020!!!", likes: 2, 
//     comments: [{user: {name: 'Kawhi Leonard', username: 'rapsowemeone', image: kawhi}, text: "I wish I were a Laker..."}, {user: {name: 'Kevin Durant', username: 'coolguy123', image: durant}, text: "Great post!"}]}, 

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    image:{
        type: String,
        required: false,
        minlength: 1,
        trim: true,
    }
})

const CommentSchema = new mongoose.Schema({
    user: UserSchema,
    text: {
        type: String,
        minlength: 1,
        trim: true,
    }
})

const Post = mongoose.model("Post", {
    user: UserSchema,
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    likes: {
		type: Number,
        required: true,
        default: 0
    },
    date: {
        type: String,
        required: true
    },
    comments: [CommentSchema]
})

module.exports = { Post }