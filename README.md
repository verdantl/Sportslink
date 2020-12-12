# team44
This web application allows athletes and sports recruiters to showcase their accomplishments and abilities on a personal profile page. 

# Link to deployed app on Heroku 
https://guarded-hamlet-25028.herokuapp.com/

## Opening the app
cd sportslink

npm start

## setting up the app
cd to team44 (root):    mkdir mongo-data
                        mongod --dbpath mongo-data

cd to team44 (root):   npm install  

cd to sportslink:   npm install

## building the app
cd to sportslink:   npm run build

cd to team 44:      node server.js

open on:            http://localhost:5000/


## Instructions
Please use the login page with the username user and password user to login to the application with the user Lebron James. A signup page will also be available where you can sign up for an account. You can sign up for two types of accounts. One as an athelete and one as a recruiter. 

Following log in, you will be sent to the dashboard page where you can view the News box and click to access external data. Click on "view your profile" to access your personal profile.
At the dashboard (home page), you can see all your posts and other peoples' posts as well as write a new post. You can also comment and like on other peoples' posts. 

You can also use the Top Bar for navigation.

On the personal profile page, you are able to add, edit, and delete your profile information (personal information, experience, achievements, and images).

You can also search up people on the search page which you can access through the top navigation bar. You can toggle between athletes, sponsors, and posts to be searched up. If you'd like, please search up 'Kawhi Leonard" and click on his name to view his proile.
You can also enter in a location, organization, or sport (but only one at a time) and the search results will be filtered.

A user can also access their messaging, where they can type in messages to other users (for now only the DOM manipulations occur).
In addition, the user can go to settings and change their personal information.

On the Admin side, please use the username admin and the password admin. Once logging in, you will be sent to the Admin screen where you can search for users and take actions like suspending, deleting, or editing their accounts. The editing of the accounts is similar
to the editing of the profile for a personal profile page. You can also delete posts and filter what to look for using the filter column on the left side (but only one at a time, like the User)

## Overview of Routes
### Session API Routes
/users/login - POST : This route is used to validate and login a user. It expects a username and password in the body. It checks if the user is trying to log in as admin, if it is it will check for the admin user and verify the password. Otherwise it checks if there is a user by the username and takes it user profile to check for suspension. If the username is not suspended it verfies the password. Upon successful login, it sets session variables and returns the current user's username. If it fails to find the user, the user is suspended, or there is a server error; it will return an error. 

/users/logout - GET : This route is used to terminate the session and log out a user. On success it will log the user out, on failiure it will send an error.

/users/check-session - GET : This route checks if a user is logged in on the session. If a user is logged in it will return the current users username, otherwise it will send an error.

### Account API Routes
/api/accounts - POST : This route creates a new user account. It expects a username, email, and password in the body. It will create a new account using the Account Schema and save it to the database and update the session variables. Upon success it returns the new account, otherwise it will send an error.

/api/accounts/:username - GET : This route gets an account by username. It expects a username in the URL. It finds a user account by username and returns it upon success. Otherwise it will return an error.

/api/accounts/:user - PATCH : This route updates account information by username. It expects a username in the URL. It will find an account by username and update the value based on what is included in the body. It returns the updated account if successful, otherwise it will return an error.

/api/accounts/:username - DELETE : This route deletes an account by username. It expects a username in the URL. Must be logged in to access this route. It will find the account by username and delete it. If successful it will return the deleted account, otherwise it will send an error.

### User Resources API Routes
/api/users - GET : This route gets all the user profiles. Must be logged in to access this route. Upon success it returns all user profiles, otherwise it returns an error.

/api/users/:username - GET : This route gets a user profile by username. It expects a username in the URL. It finds the user profile by username and returns it if successful. Otherwise it returns an error.

/api/users - POST: This route creates a new user profile. It expects the a user type boolean, username, name, location, organization, and sport in the body. It creates the user profile using the User schema, and saves it to the database. It returns the user profile if successful, otherwise it returns an error.

/api/users/:username - PATCH : This route updates a user profile by username. It expects a username in the URL. Must be logged in to access this route. Finds a user profile by username and updates according to the provided body. Returns the updated user profile if successful and an error otherwise.

/api/users/:id - DELETE : This route deletes a user profile by user id. It expects an user id in the URL. Must be logged in to access this route. Finds a user profile by user id and deletes it. If successful it turns the deleted account, otherwise it returns an error.

/api/users/experience/:username - POST : This route adds a new user experience by username. It expects a username in the URL. Must be logged in to access this route. Finds user profile by username and updates experience based on body. Returns updated profile, otherwise it returns an error.

/api/users/experience/:username/:experience - PATCH : This route updates an existing experience by username and experience id. It expects a username and experience id in the URL. Must be logged in to access this route. Finds user profile by username and updates correct experience using the experience id. Returns updated user profile on success and an error otherwise.

/api/users/experience/:username/:experience - DELETE : This route deletes an existing experience by username and experience id. It expects a username and experience id in the URL. Must be logged in to access this route. Find user profile by username and deletes an experience from the profile via experience id. Returns user if successful and an error otherwise.

/api/users/career/:username - POST : This route adds a new career accomplishment by username. It expects a username in the URL. Must be logged in to access this route. Finds user profile by username and adds new achievement from body. Returns user if successful and an error otherwise.

/api/users/career/:username/:careerid - PATCH : This route updates an existing career accomplishment by username and career accomplishment id. It expects a username and career accomplishment id in the URL. Must be logged in to access this route. Finds user profile by username and updates career accomplishment based on fields in body. Returns updated user if successful and an error otherwise.

/api/users/career/:username/:cid - DELETE : This route deletes an existing career accomplishment by username and career accomplishment id. It expects a username and career accomplishment id in the URL. Must be logged in to access this route. Finds a user profile by username and deletes career accomplishment by accomplishment id. Returns user if successful or an error on failiure.

### Image API Routes
/api/images/:username - POST : This route adds a new image by username. It expects a username in the URL and expects an image object in the body. Must be logged in to access this route. Finds a user profile by username and adds an image from the body to the images array. Returns user or an error if an error occurs.

/api/images/:username/:imageid - DELETE : This route delets an existing image by username and image id. It expects a username and image id in the URL. Must be logged in to access this route. Finds a user by username and removes image from images array by image id. Returns user or an error if an error occurs

### Post API Routes
/api/posts - GET : This route gets all posts. Must be logged in to access this route. Returns all posts in database or an error if one occurs.

/api/posts - POST : This route creates a new post. It expects a user and poast text in the body. Must be logged in to access this route. Creates a new post based on body and saves it to database. Returns new post if successful or an error. 

/api/posts/:postid - DELETE : This route deletes an existing post by post id. It expects a post id in the URL. Must be logged in to access this route. Finds a post by post id and removes it. Returns post if successful or an error if one occurs.

/api/deletePosts/:username - DELETE : This route deletes all existing posts by username. It expects a username in the URL. Deletes all posts under a username and returns posts if successful. Otherwise returns error if one occurs.

/api/posts/:postid - POST : This route adds a new comment to an existing post by post id. It expects a post id in the URL and it expects a comment in the body. Finds a post by post id and adds to the comments array. Returns post if successful and an error otherwise.

/api/likes/:postid - POST : This route adds a username to the lists of likes of an existing post by post id. It expects a post id in the URL and expects a username in the body. Must be logged in to access this route. Finds post by post id and adds a username to array of likes for post if not already liked. Returns post if not liked or "Already liked" if this is true. Otherwise it will return an error.

/api/likes/:postid - DELETE : This route deletes the username from the lists of likes of an existing post by post id. It expects a post id in the URL and expects a username in the body. Must be logged in to access this route. Finds post by post id and removes username from array of likes. Returns post if successful and an error otherwise.

### Messages API Routes
/api/conversation/:username - GET : This route gets all conversations by username. It expects a username in the URL. Finds all conversations that include the sender or reciever to be the username. Sorts by descending date and returns conversations. Otherwise returns an error.

/api/conversation - POST : This route creates a new conversation. It expects a sender username and reciever username in the body. Must be logged in to access this route. Creates a new conversation using the Conversation schema and returns it. Returns an error otherwise.

/api/message/:id - POST : This route create a new message for a conversation by conversation id. It expects a conversation id in the URL and expects a sender username and message data in the body. Finds a conversation by conversation id and adds a new message to it and returns conversation. Returns error if an error occurs.

## 3rd party libraries
We are using React as well as some Material UI components (i.e. checkboxes, icons, dialogs etc.) for the front-end of this project.
Additional 3rd party libraries:
react-country-region-selector for the Location Dropdown component
react-loading for the loading animation