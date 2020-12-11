'use strict'
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

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
    likes:[LikeSchema],
    date: {
        type: String,
        required: true
    },
    comments: [CommentSchema]
})

const LikeSchema = mongoose.Schema({
		type: String,
        required: false,
        unique: true
})

LikeSchema.plugin(uniqueValidator);

module.exports = { Post }