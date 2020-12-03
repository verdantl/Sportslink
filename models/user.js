'use strict'
const mongoose = require('mongoose')

const ExperienceSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
	}, 
	organization: {
		type: String,
		required: true,
		minlength: 6
        },
        league: {
                type: String,
                required: true,
                minlength: 1
        },
        description: {
                type: String,
                required: false,
                minlength: 1
        },
        years: {
                type: String,
                required: true,
                minlength: 4
        }
})

const User = mongoose.model('User', {
        player: {
                type: Boolean,
                required: true
                },
        username: {
                type: String,
                required: true,
                minlength: 1,
                trim: true,
                unique: true
        },
        suspended: {
                type: Boolean,
                required: true
        },
        name: {
                type: String,
                required: true,
                minlength: 1, 
                trim: true
        },
        image: {
                type: String,
                required: false,
                minlength: 1,
        },
        description: {
                type: String,
                required: false,
                minlength: 0,
                trim: true
        },
        location: {
            type: String,
            required: false,
            minlength: 0,
            trim: true
        },
        organization: {
            type: String,
            required: false,
            minlength: 0,
            trim: true
        },
        sports: {
            type: String,
            required: false,
            minlength: 0,
            trim: true
        },
        accomplishments: {
            type: Array,
            required: false,
            minlength: 0
        },
        experience: [ExperienceSchema]

})

module.exports = { User }