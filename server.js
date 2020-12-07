"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();
const path = require('path')

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { User } = require("./models/user");
const { Account} = require("./models/account");
const { Post } = require("./models/post")
const { Conversation } = require("./models/conversation")

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const { mongo } = require("mongoose");
const conversation = require("./models/conversation");
app.use(bodyParser.urlencoded({ extended: true }));

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (req.session.user) {
        Account.findOne({username: req.session.username}).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}

// Middleware for authentication of resources -- unfinished
const authenticateAdmin = (req, res, next) => {
    if (req.session.user) {
        User.findOne({username: req.session.username}).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}


/*** Session handling **************************************/
// Create a session and session cookie
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        }
    })
);

// A route to login and create a session
app.post("/users/login", async(req, res) => {
    const usern = req.body.usern;
    const password  = req.body.password;

    // log(usern, password, "post");
    // Use the static method on the User model to find a user
    // by their email and password
    Account.findByUsernamePassword(usern, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.email = user.email; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            req.session.username = user.username;
            res.send({ currentUser: user.username });
        })
        .catch(error => {
            log(error)
            res.status(400).send()
        });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
    log(req.session)
    if (req.session.user) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});

/*********************************************************/

/*** API Routes below ************************************/
// Account API Route
//SIGNUP FOR AN ACCOUNTCreate a new account - sign up for the first time -- after this call, we'll want to make a user signup profile page.
app.post('/api/accounts', mongoChecker, async (req, res) => {
    log(req.body)
    // Create a new user
    const account = new Account(req.body);
    try {
        // Save the user
        const newAccount = await account.save()
        res.send(newAccount)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

// a GET route to get a account by username
app.get('/api/accounts/:username', mongoChecker, async (req, res) => {
    const username = req.params.username

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

    try {
        const user = await Account.findOne({username: username})
        // log(user)
        res.send(user) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

//Remember to check for the session user id, function for updating account settings information
app.patch('/api/accounts/:user', mongoChecker, async (req, res) => {
    const username = req.params.user
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    let changes = {}
    
    if (req.body.email) {
        changes.email = req.body.email
    }
    if (req.body.username) {
        changes.username = req.body.username
    }

    try {
        const account = await Account.findOneAndUpdate({username: username}, {$set: changes}, {new: true, useFindAndModify: false})
        if (!account) {
			res.status(404).send('Resource not found')
		} else { 
            // Need to figure out hashing
            if (req.body.password) {
                const check = await Account.findByUsernamePassword(username, req.body.oldpassword)
                if (!check) {
                    res.status(404).send('Resource not found')
                } else {
                    account.password = req.body.password
                    const hashed = await account.save()
                    res.send(hashed)
                    return
                }
            }
            // if (req.body.password) {
            
            //     res.send(hashed)
            //     return
            // } 
            res.send(account)
		}
	} catch (error) {
		log(error)
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // bad request for changing the account.
		}
	}
})



//Deletes an account, we need to authenticate for admin, function for updating account settings information
app.delete('/api/accounts/:username', mongoChecker, async (req, res) => {
	const username = req.params.username

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	// Delete a student by their id
	try {
		const account = await Account.findOneAndDelete({username: username})
		if (!account) {
			res.status(404).send()
		} else {  
			res.send(account)
		}
	} catch(error) {
		log(error)
		res.status(500).send() // server error, could not delete.
	}
})



/** User resource routes **/
// a GET route to get all users
app.get('/api/users', mongoChecker, authenticate, async (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 
    // Get the students
    try {
        const users = await User.find()
        // res.send(students) // just the array
        res.send({users}) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

// a GET route to get a user by username
app.get('/api/users/:username', mongoChecker, async (req, res) => {
    const username = req.params.username

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 
    // Get the students
    try {
        const user = await User.findOne({username: username})
        // log(user)
        res.send(user) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

// a POST route to *create* the user profile --separate from initial account -- untested, because req.body sucks
app.post('/api/users', mongoChecker, async (req, res) => {
    log(`Adding user ${req.body.name}`)
    // Create a new student using the Student mongoose model
    
    const user = new User({
        player: req.body.player, //athlete or not
        username: req.body.username, //login username
        suspended: false,
        name: req.body.name,
        image: null,
        description: "Description",
        location: req.body.location,
        organization: req.body.organization,
        sports: req.body.sports,
        accomplishments: [],
        experience: [],
        career: []
      })
    // Save student to the database
    // async-await version:
    try {
        const result = await user.save() 
        res.send(result)
    } catch(error) {
        log(error) // log server error to the console, not to the client.
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})

// The body will be an array that consists of a list of changes to make to the
//  resource:
/*
[
  { "op": "replace", "path": "/year", "value": 4 },
  { "op": "replace", "path": "/name", "value": "Jim" },
  ...
]
*/
//Remember to check for the session user id, function for updating profile information
app.patch('/api/users/:username', mongoChecker, authenticate, async (req, res) => {
	const username = req.params.username

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    }
    
    // Find the fields to update and their values.
    // const fieldsToUpdate = {}


	// req.body.map((change) => {
	// 	const propertyToChange = change.path.substr(1) // getting rid of the '/' character
	// 	fieldsToUpdate[propertyToChange] = change.value
    // })
    // Was nonstop complaing when I tried to use map, even with an array, temporary fix as I don't know how this affects suspend

	// Update the student by their id.
	try {
		const user = await User.findOneAndUpdate({username: username}, {$set: req.body}, {new: true, useFindAndModify: false})
        if (!user) {
			res.status(404).send('Resource not found')
		} else {   
			res.send(user)
		}
	} catch (error) {
		log(error)
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // bad request for changing the student.
		}
	}

	// 

})
//Remember to check for the session user id, function for updating profile information
app.delete('/api/users/:id', mongoChecker, authenticate, async (req, res) => {
	const id = req.params.id

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	// Delete a student by their id
	try {
		const user = await User.findByIdAndRemove(id)
		if (!user) {
			res.status(404).send()
		} else {   
			res.send(user)
		}
	} catch(error) {
		log(error)
		res.status(500).send() // server error, could not delete.
	}
})

//add a new experience -- completed --
app.post('/api/experience/:username', mongoChecker, authenticate, async (req, res) => {
    const username = req.params.username

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    try {
		const user = await User.findOne({username: username})
		if (!user) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
			/// sometimes we might wrap returned object in another object:
			const result = await User.updateOne({username: username}, {$push: {experience: req.body}})
			res.send(result)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}

})

//edit existing experience -- finished
app.patch('/api/experience/:username/:experience', mongoChecker, authenticate, async (req, res) => {
    const username = req.params.username
    const eid = req.params.experience

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

	const fieldsToUpdate = {}
	Object.keys(req.body).map((change) => {
		const propertyToChange = "experience.$." + change
		fieldsToUpdate[propertyToChange] = req.body[change]
	})

    try {
        const user = await User.findOne({username: username})

		if (!user) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
            const updated = await User.findOneAndUpdate({username: username, "experience._id" : eid}, {$set: fieldsToUpdate}, {new: true, useFindAndModify: false})
			res.send(updated)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}

})

//delete existing experience --
app.delete('/api/experience/:username/:experience', mongoChecker, authenticate, async (req, res) => {
    const username = req.params.username
    const eid = req.params.experience

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

    try {
        const user = await User.updateOne(
            {username: username},
           { $pull: { 'experience': {  _id: eid} } })

		if (!user) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
			res.send(user) // this will be the array of the experience before deletion 
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
})

//add a new career accomplishment - input req.body should be {"career": "stuff"} ---- have not solved for duplicates
app.post('/api/users/:id/career', mongoChecker, authenticate, async (req, res) => {
    const id = req.params.id
	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    try {
		const user = await User.findById(id)
		if (!user) {
			res.status(404).send('Resource not found')  // could not find this
		} else {
            /// sometimes we might wrap returned object in another object:
            user.career.push(req.body)
            const result = await user.save()
            res.send(result)

		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
})

//edit existing accomplishment -- replaces string only, expects form , MIGHT WANT TO REPLACE WITH SOMETHING BETTER
app.patch('/api/users/:id/career/:careerid', mongoChecker, authenticate, async (req, res) => {
    const id = req.params.id
    const cid = req.params.careerid

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    const fieldsToUpdate = {}
    
	req.body.map((change) => {
		const propertyToChange = change.path.substr(1) // getting rid of the '/' character
        const property = "career.$." + propertyToChange
        fieldsToUpdate[property] = change.value
    })

    try {
        const user = await User.findById(id)

		if (!user) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
            const updated = await User.findOneAndUpdate({"_id": id, "career._id" : cid}, {$set: fieldsToUpdate}, {new: true, useFindAndModify: false})
			res.send(updated)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}

})

//delete existing accomplishment
app.delete('/api/users/:id/career/:cid', mongoChecker, authenticate, async (req, res) => {
    const id = req.params.id

    const cid = req.params.cid

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

    try {
        const user = await User.findByIdAndUpdate(
            id,
           { $pull: { 'career': {  _id: cid} } })

		if (!user) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
			res.send(user.career) // this will be the array of the experience before deletion 
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
})


//API for POSTS
// a GET route to get all posts
app.get('/api/posts', mongoChecker, authenticate, async (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    try {
        const posts = await Post.find()
        // res.send(students) // just the array
        posts.reverse()
        res.send(posts) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }
})

// creating a new post -- untested
app.post('/api/posts', mongoChecker, authenticate, async (req, res) => {
    const today = new Date().toDateString()
    const post = new Post({
        user: req.body.user,
        text: req.body.text,
        date: today,
        likes: 0,
        comments: []
    })
    // Save student to the database
    // async-await version:
    try {
        const result = await post.save() 
        res.send(result)
    } catch(error) {
        log(error) // log server error to the console, not to the client.
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})

app.delete('/api/posts/:postid', mongoChecker, authenticate, async (req, res) => {
    const pid = req.params.postid
    	// Validate id
	if (!ObjectID.isValid(pid)) {
		res.status(404).send('Resource not found')
		return;
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

    try {
        const post = await Post.findByIdAndRemove(pid)

		if (!post) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
			res.send(post) // this will be the array of the experience before deletion 
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
})

//delete post by username
app.delete('/api/deletePosts/:username', mongoChecker, async (req, res) => {
    const username = req.params.username

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

    try {
        const post = await Post.deleteMany({"user.username": username})

		if (!post) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
			res.send(post) // this will be the array of the experience before deletion 
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
})

// adding a comment -- untested
app.post('/api/posts/:postid', mongoChecker, async (req, res) => {
    const pid = req.params.postid
    // Save student to the database
    // async-await version:
	// Validate id
	if (!ObjectID.isValid(pid)) {
		res.status(404).send('Resource not found')
		return;
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    try {
		const post = await Post.findById(pid)
		if (!post) {
			res.status(404).send('Resource not found')  // could not find this student
		} else {
            /// sometimes we might wrap returned object in another object:
            req.body.date = new Date()
			post.comments.push(req.body)
			const result = await post.save()
			res.send(result)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}

})

// API for messages
// GET for getting all conversations by a specific user
app.get('/api/conversation', mongoChecker, async (req, res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return
    }
    try {
        const conversations = await Conversation.find({ 
            sentUsername: req.body.currUser
        }).sort({date: 'ascending'})
        res.send(conversations)
    } catch (error) {
        log(error)
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
    }
})

// Create a new conversation
app.post('/api/conversation', mongoChecker, async (req, res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return
    }

    const conversation = new Conversation({
        sentUsername: req.body.sentUsername,
        toUsername: req.body.toUsername,
        messages: []
    })
    // Saving the conversation to the database:
    try {
        const result = await conversation.save()
        res.send(result)
    } catch(error) {
        log(error)
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
    }
})

// Add a new message to a conversation
app.post('api/conversation/:id/message', mongoChecker, async (req, res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return
    }

    const id = req.params.id
    
    // Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;
    }
    
    const currDate = new Date()
    const message = new Message({
        sentUsername: req.body.sentUsername,
        messageData: req.body.messageData,
        sendDate: currDate
    })
    
    // Check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    }
    
    try {
        const converation = await Conversation.findById(id)
        if (!converation) {
            res.status(404).send('Resource not found') // Could not find this conversation
        } else {
            conversation.messages.push(message)
            const result = await conversation.save()
            res.send(result)
        }
    } catch (error) {
        log(error)
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
    }
})


/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/sportslink/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/login", "/dashboard", "/messaging"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/sportslink/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});