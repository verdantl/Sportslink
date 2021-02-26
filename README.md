# Sportslink
This web application allows athletes and sports recruiters to showcase their accomplishments and abilities on a personal profile page. 

# Link to deployed app on Heroku 
https://guarded-hamlet-25028.herokuapp.com/

Please note that messaging connection to database works and messages are sent, however there are some issue with the contact sidebar. 
There is a bug with retrieving contacts which causes the conversation to show up as the current user logged in.

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
Please use the login page with the username user and password user to login to the application with the user Lebron James. A signup page will also be available where you can sign up for an account. You can sign up for two types of accounts. One as an athelete and one as a recruiter. Your choice of account slightly alters the aesthetics of your account and also allows the search feature to filter by athlete vs recruiter.

Following log in, you will be sent to the dashboard page where you can view the News box and click to be redirected to external new articles. You can also view the video of the day. In addition, at the dashboard (home page), you can see all your posts and other peoples' posts as well as write a new post and comment on other peoples' posts. You also have the option to add a post, which similarly gets added to the dashboard. In addition, by clicking on a given user's profile, you can view their profile page.

Click on the profile icon to access your personal profile. At your profile page, you can add or edit events and accomplishments to your profile and also upload person details and photos. 

To edit more intimate details about your account, you can click on the settings icon and edit account details.

To find other users, you can click on their profile in the dashboard, or use the search fuction. The search function allows for filtering by several parameters including user type, location, organization and sport, as well as the ability to search for posts (instead of users) using the same parameters. Upon viewing another user's profile, you can choose to contact them, which opens up a 
chat screen to initiate a chat with the other user. 

To log in as an administrator, use the log-in credentials admin and admin. Upo logging in, you have access to that admin dashboard where you have superuser privelages. You are able to search for athletes, recruiters, or posts. You can view user profiles and also edit them completely. In addition, you have the ability to delete accounts or suspend users. Users that have been suspended can no longer log in to the site and are intentionally not told the reason for their suspension.


## 3rd party libraries
We are using React as well as some Material UI components (i.e. checkboxes, icons, dialogs etc.) for the front-end of this project.
Additional 3rd party libraries:
react-country-region-selector for the Location Dropdown component
react-loading for the loading animation
