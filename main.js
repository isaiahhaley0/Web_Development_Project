const express = require('express'), app = express();
homecontroller = require("./controllers/homeController");
errorController = require("./controllers/errorController");
usersController = require("./controllers/usersController");
feedController = require("./controllers/feedController");
router = express.Router();
methodOverride = require("method-override");
layouts = require("express-ejs-layouts");
mongoose = require("mongoose");
const expressSession = require("express-session"),
cookieParser = require("cookie-parser"),
connectFlash = require("connect-flash");


router.use(cookieParser("secret_passcode"));
router.use(expressSession({
    secret: "impossiblePassword",
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
}));
router.use(connectFlash());

router.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    next();
});


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
app.get("/security", usersController.getSecurityPage);
app.get("/search", homecontroller.showSearchPage);
app.post("/subscribe", usersController.saveUser);
app.post("/", homecontroller.showIndex);
app.get("/posts", feedController.getAllPosts);
app.post("/posts",feedController.savePost);
app.get("/myProfile",usersController.getMyProfile);
app.get("/editProfile",usersController.editProfile);
app.put("/editProfile",usersController.editUser);
app.get("/delete", usersController.deleteAccount);
app.delete("/delete", usersController.deleteUser);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);



app.listen(app.get("port"), ()=>{

    console.log(`Server is running on port: ${app.get("port")}`)

});