# team44
This web application allows athletes and sports recruiters to showcase their accomplishments and abilities on a personal profile page. 
## Opening the app
cd sportslink

npm start

# setting up the app
cd to team44 (root):    mkdir mongo-data
                        mongod --dbpath mongo-data

cd to team44 (root):   npm install  

cd to sportslink:   npm install

# building the app
cd to sportslink:   npm run build

cd to team 44:      node server.js

open on:            http://localhost:5000/


## Instructions
Please use the login page with the username user and password user to login to the application with the user Lebron James. A signup page will also be available where you can sign up for an account.

Following log in, you will be sent to the dashboard page where you can view the News box and click to access external data. Click on "view your profile" to access your personal profile.
At the dashboard (home page), you can see all your posts and other peoples' posts as well as write a new post and comment on 
other peoples' posts. 

You can also use the Top Bar for navigation.

On the personal profile page, you are able to add, edit, and delete your profile information.

You can also search up people using the search bar in the top navigation bar. You can toggle between athletes, sponsors, and posts
to be searched up. If you'd like, please search up 'Kawhi Leonard" and click on his name to view his proile.
You can also enter in a location, organization, or sport (but only one at a time) and the search results will be filtered.

A user can also access their messaging, where they can type in messages to other users (for now only the DOM manipulations occur).
In addition, the user can go to settings and change their personal information.

On the Admin side, please use the username admin and the password admin. Once logging in, you will be sent to the Admin screen where you can search for users and take actions like suspending, deleting, or editing their accounts. The editing of the accounts is similar
to the editing of the profile for a personal profile page. You can also delete posts and filter what to look for using the filter column on the left side (but only one at a time, like the User)

## Overview of Routes
/users/login - POST : A route to login and create a session
/users/logout - GET : A route to logout a user
/users/check-session - GET : A route to check if a user is logged in on the session
Account API Routes
/api/accounts - POST : Create a new account - sign up for the first time -- after this call, we'll want to make a user signup profile page.
/api/accounts/:user - PATCH : function for updating account settings information
/api/accounts/:account - DELETE : Deletes an account, we need to authenticate for admin, function for updating account settings information
User Resources API Routes
/api/users - GET : route to get all users
/api/users - POST: route to *create* the user profile --separate from initial account -- untested, because req.body 
/api/users/:id - PATCH : function for updating profile information
/api/users/:id - DELETE : function for deleting profile information
/api/users/:id/experience - POST : add a new experience -- completed --
/api/users/:id/experience/:experience - PATCH : edit existing experience -- finished
/api/users/:id/experience/:experience - DELETE : delete existing experience --
/api/users/:id/career - PUT : add a new career accomplishment - input req.body should be {"career": "stuff"} ---- have not solved for duplicates
/api/users/:id/career/:careerid - PATCH : edit existing accomplishment -- replaces string only, expects form , MIGHT WANT TO REPLACE WITH SOMETHING BETTER
/api/users/:id/career/:cid - DELETE : delete existing accomplishment
Post API Routes
/api/posts - GET : route to get all posts
/api/posts - POST : creating a new post -- untested
/api/posts/:postid - DELETE : delete post
Messages API Routes
/api/message - GET : for getting all messages from a specific user, to another specific user sorted by date ascending
/api/message - POST : Create a new message

## 3rd party libraries
We are using React as well as some Material UI components (i.e. checkboxes, icons, dialogs etc.) for the front-end of this project.
Additional 3rd party libraries:
react-country-region-selector for the Location Dropdown component
react-loading for the loading animation