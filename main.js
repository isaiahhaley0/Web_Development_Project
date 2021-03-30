const express = require('express'), app = express();
homecontroller = require("./controllers/homeController");
errorController = require("./controllers/errorController");
 
userController = require("./controllers/usersController");


layouts = require("express-ejs-layouts");
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/confetti_cuisine",{useNewUrlParser: true, useUnifiedTopology: true })

app.set("port",process.env.PORT||3000);

app.set("view engine", "ejs");
app.use(layouts);


app.get("/",function (req, res) {
    res.send('About this wiki');
})
app.use(express.static("public"))
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());


 

  

app.listen(app.get("port"), ()=>{

    console.log(`Server is running on port: ${app.get("port")}`)

});