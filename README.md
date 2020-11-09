# team44
This web application allows athletes and sports recruiters to showcase their accomplishments and abilities on a personal profile page. 
## Opening the app
cd sportslink

npm start

## Instructions
Please use the login page with the username user and password user to login to the application. A signup page will be available
but not entirely functional since that involves back-end manipulation.

Following log in, you will be sent to the dashboard page where you can view the News box (but can't click on them to access
an external site since we're just using dummy data here), click on "view your profile" to access your personal profile, see other people's posts, and write your own posts. You can also use the Top Bar for navigation purposes and searching.

On the personal profile page, you are able to add, edit, and delete your profile information.

You can also search up people using the search bar in the top navigation bar. Please search up 'Kawhi Leonard" and the page will lead you to a search results page. Toggling between the filters will cause different results to be shown (which we plan on keeping
for now, because no back-end is involved)

On the Admin side, please use the username admin and the password admin. Once logging in, you will be sent to the Admin screen where you can search for users and take actions like suspending, deleting, or editing their accounts. The editing of the accounts is similar
to the editing of the profile for a personal profile page. You can also delete posts and filter what to look for using the filter column on the left side.

## 3rd party libraries
We are using React as well as some Material UI components (i.e. checkboxes, icons etc.) for the front-end of this project.