/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const AccountSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,   // custom validator
			message: 'Invalid email address'
		}
	}, 
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 4
	}
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
AccountSchema.pre('save', function(next) {
	const account = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (account.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(account.password, salt, (err, hash) => {
				account.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
AccountSchema.statics.findByUsernamePassword = function(username, password) {
	const Account = this // binds this to the User model

	// First find the user by their email
	return Account.findOne({ username: username }).then((foundAccount) => {
		// Was returning model, change to object?
		const foundAccountObj = foundAccount.toObject()
		if (!foundAccountObj) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, foundAccountObj.password, (err, result) => {
				if (result) {
					resolve(foundAccountObj)
				} else {
					reject()
				}
			})
		})
	})
}

// make a model using the User schema
const Account = mongoose.model("Account", AccountSchema)

module.exports = { Account }

