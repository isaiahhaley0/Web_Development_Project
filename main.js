const express = require('express'), app = express();
homecontroller = require("./controllers/homeController");
errorController = require("./controllers/errorController");
 
usersController = require("./controllers/usersController");


layouts = require("express-ejs-layouts");
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/vibezdb",{useNewUrlParser: true, useUnifiedTopology: true })

app.set("port",process.env.PORT||3000);

app.set("view engine", "ejs");

app.set('layout', 'layout', 'navlessLayout');
app.use(layouts);

app.get("/",homecontroller.showIndex) ;
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.get("/users", usersController.getAllUsers);
app.get("/signup", usersController.getUsersPage);
app.get("/login",homecontroller.showLogIn);
app.post("/security", usersController.getSecurityPage);
app.post("/subscribe", usersController.saveUser);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

  

app.listen(app.get("port"), ()=>{

    console.log(`Server is running on port: ${app.get("port")}`)

});