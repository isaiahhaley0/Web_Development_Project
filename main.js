const express = require('express'), app = express();
homecontroller = require("./controllers/homeController");
errorController = require("./controllers/errorController");
usersController = require("./controllers/usersController");
feedController = require("./controllers/feedController");
router = express.Router();
methodOverride = require("method-override");
layouts = require("express-ejs-layouts");
mongoose = require("mongoose");
passport = require("passport"),
    cors = require("cors")
    cookieParser = require("cookie-parser"),
    expressSession = require("express-session"),
    expressValidator = require("express-validator"),
    connectFlash = require("connect-flash"),
    User = require("./models/user");

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
router.use(passport.initialize());
router.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);
router.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
});


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true })

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
app.post("/", homecontroller.showIndex);
app.get("/users", usersController.getAllUsers);
app.get("/signup", usersController.getUsersPage);
app.get("/login",homecontroller.showLogIn);
app.get("/security", usersController.getSecurityPage);
app.get("/search", homecontroller.showSearchPage);
app.post("/subscribe", usersController.saveUser);

app.post("/login", homecontroller.LogIn);
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