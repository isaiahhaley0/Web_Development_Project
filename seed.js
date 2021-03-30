const mongoose = require("mongoose"),Users = require("./models/user");


mongoose.connect("mongodb://localhost:27017/vibezdb",{useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection;
const uSeed =[
    {
        username:'staff',
        email:'staff@vibez.net'
    },
    {
        username:'bary b',
        email:'bbenson@bmail.com'
    },
    {
        username:'imonty',
        email:"imnt@gmail.com"
    }
];


var commands = [];

uSeed.forEach(c => {
    commands.push(
      Users.create({
        username: c.username,
        email: c.email,
 
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