# Web Development Final Project: VIBEZ
---
## By: Isaiah Haley and Ethan Walton
  
  
## Technologies Used:
* HTML
* CSS
* Node.js
* Express
* Vue.js
* MongoDB(Database)
* Heroku (Deployment Server for Application)
* Zoom (Recording Purposes)

## Zoom Link for Project Overview:
---
https://ucdenver.zoom.us/rec/share/AK1jmMuJRsKp_9AZp0tYVFduUQo0BuHyDgnUU4y5vkqk7qkqkLWWJu1uB6Gty7nB.GXCYmRzYcZ1turym 
Passcode: ?VB?Sa78 

This link above contains the required video overview done by both partners, doing a brief overview of implementation that was done on each end and walking you through the Vibez Web Application project that has been completed for the Spring 2021 semester.


## Design Choices:
EJS is used to control the layout of the page, such as displaying the navigation bar on certain pages, while hiding it on others(such as the login and signup pages), as allowing the user to have access to the navigation bar before they've logged in or signed up may allow them to access parts of the app they should not have at the time,  and allowing for the navigation of the site without refreshing the page. Vue.js was used client side for updating the feed/posts as well as dynamically displaying user data. Vue is used to control the data as well as query the backend api as the page loads. Vue is also used to perform actions such as submitting posts, following users, etc. 

## Schema Choice:
We decided to go with a schema that felt simple yet efficient to make sure that we were able to capture all needed pieces in terms of user data and post data as well. Ethan worked on setting up and implementing the user schema that is implemented for sign up and log in purposes to verify that the users are being stored in the database and that each user does have certain unique fields such as the email address to help with security features. Isaiah worked on much of the posting schema and configuring the backend to track things such as the post title, content inside of the post, and ensuring that there is tagging implemented as well. 

## Project Choice:
We chose to go with doing a project that followed the default project guidelines. The formatting is supposed to be able to resemble web applications similar to something like Twitter. This implementation of Vibez done by Ethan and Isaiah showcase all abilities learned over the course of the semester in Web application Development class. Starting off originally with HTML and finishing with components such as Node.js, and Heroku deployments we have now successfully deployed our Web Application that is fully functionally to sign up, login, create posts, track things like tags and users while logged in, and much more. All together this out of the box retro style social web application has brought all components of the class together to form our final project 'Vibez'.


## Future Plans:
Development is completed.


## Responsibilities:
Isaiah:
* Home Page
* User Profiles
* CRUD Actions
* Deployment and Cluster
* Cloud Mongo Instance
* Security
* Authentication


Ethan:
* Login
* Sign Up
* Search Page
* MongoDB 
* Schema Setup and Validation
* Sessions/Cookies
* Security

## Execution Instructions:

Launching the server follows the procedure as described in the project description.

That is, first, run 'npm install' to install required dependencies, then 'node seed.js' to seed the local MongoDB, and finally start the program with 'npm start'

## Accessing Deployment Instructions:

Our Web Application 'Vibez' has been deployed using Heroku as described in class and is connected to use either the cloud Mongo instance or a local Mongo as well for data storage 

Link: https://goodvibez.herokuapp.com/
SSL/TLS was not yet implemented, but would be done in the future to protext against security vulnerabilities.

## HTML Checker Status

All checks passed
