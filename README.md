# team44
This web application allows athletes and sports recruiters to showcase their accomplishments and abilities on a personal profile page. 
## Opening the app
cd sportslink

npm start

## Instructions
Please use the login page with the username user and password user to login to the application. A signup page will be available
but not entirely functional since that involves back-end manipulation.

Following log in, you will be sent to the dashboard page where you can view the News box (but can't click on them to access
an external site since we're just using dummy data here), click on "view your profile" to access your personal profile.
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

## 3rd party libraries
We are using React as well as some Material UI components (i.e. checkboxes, icons etc.) for the front-end of this project.