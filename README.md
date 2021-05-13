# Web Development Assignment 4

## Technologies Used:
* HTML
* CSS
* Node.js
* Express
* Vue.js
* MongoDB(Database)

## Design Choices:
EJS is used to control the layout of the page, such as displaying the navigation bar on certain pages, while hiding it on others(such as the login and signup pages), as allowing the user to have access to the navigation bar before they've logged in or signed up may allow them to access parts of the app they should not have at the time,  and allowing for the navigation of the site without refreshing the page. Vue.js was used client side for updating the feed/posts as well as dynamically displaying user data. Vue is used to control the data as well as query the backend api as the page loads. Vue is also used to perform actions such as submitting posts, following users, etc. 


## Future Plans:
No Future Plans. Development is completed.


## Responsibilities:
Isaiah: Feed, user actions such as following a user, deleting account, editing user, deleting post, as well as trending tags and notifications. Vue was used to control data in most cases while express was used to control the layout.

Ethan: User Authentication/cookies/sessions; along with db management of user data and id's pushed to vibezdb on MongoDB to track Users and ID of users along with creation and timestamps.

## Execution Instructions:

Launching the server follows the procedure as described in the project description.

That is, first, run 'npm install' to install required dependencies, then 'node seed.js' to seed the local MongoDB, and finally start the program with 'npm start'

## HTML Checker Status

All checks passed
