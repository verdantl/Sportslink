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
                minlength: 0
        },
        years: {
                type: String,
                required: true,
                minlength: 4
        }
})


const UserSchema = new mongoose.Schema({
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
        career: [{text: {
                type: String,
                required: false,
                minlength: 1,
                unique: true,
                trim: true
                }
        }

        ],
        experience: [ExperienceSchema]

})

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByUsername = function(username) {
	const user = this // binds this to the User model

	// First find the user by their email
	return user.findOne({ username: username }).then((foundUser) => {
		if (!foundUser) {
			return Promise.reject()  // a rejected promise
                }
                else{
                        resolve(foundUser)
                }
	})
}

const User = mongoose.model('User', UserSchema)

module.exports = { User }