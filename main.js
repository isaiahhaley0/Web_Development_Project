const express = require('express'), app = express();
homecontroller = require("./controllers/homeController");
errorController = require("./controllers/errorController");
 
userController = require("./controllers/usersController");


layouts = require("express-ejs-layouts");
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/vibezdb",{useNewUrlParser: true, useUnifiedTopology: true })

app.set("port",process.env.PORT||3000);

app.set("view engine", "ejs");
app.use(layouts);


app.get("/",homecontroller.showIndex) ;
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

  

app.listen(app.get("port"), ()=>{

    console.log(`Server is running on port: ${app.get("port")}`)

});