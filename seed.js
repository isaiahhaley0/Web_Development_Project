const mongoose = require("mongoose"),Users = require("./models/user"),Post = require("./models/posts");


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection;
const uSeed =[
    {
        name:{
            first:'Staff',
            last: 'Staff'
        },
        email:'staff@vibez.net',
        password:'adminpasswword'
    },
    {
        name:{
            first:'barry',
            last: 'benson'
        },
        email:'bbenson@bmail.com',
        password:'password'
    },
    {
        name:{
          first:'Joe',
          last: 'Joeson'
        },
        email:"imnt@gmail.com",
        password:'hunter2'
    }
];
const pSeed =[
    {

        post_title: "Test Post From Vibez",
        post_author:"Vibez Staff",
        post_content:"This is a test post from vibez staff. trending topics are available on the right. Post a new post. See what happens. This is temp text",
        post_id:1
    },
    {
        post_title: "Lorem ipsum",
        post_author: "Lorem Ipsum Dolor",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        post_id:2
    },
    {
        post_title: "Third Post",
        post_author: "GoodVibez",
        post_content: "Good Vibez Only",
        post_id:3

    }
];

var commands = [];
pSeed.forEach(p =>{
    commands.push(
        Post.create({
            post_title: p.post_title,
            post_author:p.post_author,
            post_content:p.post_content,
            post_id:p.post_id
        })
    );
});
uSeed.forEach(c => {
    commands.push(
      Users.create({
        name:{
            first: c.name.first,
            last: c.name.last
        },
        email: c.email,
        password: c.password
      })
    );
  });
 

Promise.all(commands)
  .then(r => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(`ERROR: ${error}`);
  });