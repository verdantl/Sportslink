'use strict'
const mongoose = require('mongoose')

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

const PostSchema = new mongoose.Schema({
    user: UserSchema,
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    likes:[{
        type: String,
        required: false
    }],
    date: {
        type: String,
        required: true
    },
    comments: [CommentSchema]
})

const Post = mongoose.model("Post", PostSchema)


module.exports = { Post }