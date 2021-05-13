
const express = require('express');
var cors = require('cors'), app = express();
homecontroller = require("./controllers/homeController");
errorController = require("./controllers/errorController");
usersController = require("./controllers/usersController");
feedController = require("./controllers/feedController");
tagController =require("./controllers/tagController");
router = express.Router();

methodOverride = require("method-override");
layouts = require("express-ejs-layouts");
mongoose = require("mongoose");
passport = require("passport"),
app.use(cors())
    cookieParser = require("cookie-parser"),
    expressSession = require("express-session"),
    expressValidator = require("express-validator"),
    connectFlash = require("connect-flash"),
    User = require("./models/user");
    Posts = require("./models/posts");
app.use(connectFlash());

app.use(cookieParser("secret_passcode"));
app.use(expressSession({
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


mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/vibez_db",{useNewUrlParser: true, useUnifiedTopology: true })


app.set("port",process.env.PORT||3000);

app.set("view engine", "ejs");

app.set(layouts, 'layout', 'navlessLayout');
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
app.get("/users/:id", usersController.getMyProfile);

app.put("/follow/:targetid", usersController.followUser)

app.get("/signup", usersController.getUsersPage);
app.post("/signup", usersController.validate);
app.get("/login",usersController.login);
app.post("/login", usersController.authenticate, usersController.redirectView);
app.get("/security", usersController.getSecurityPage);
app.get("/search", homecontroller.showSearchPage);
app.post("/subscribe", usersController.saveUser);

app.post("/tags",tagController.saveTag);
app.get("/tags", tagController.listTrendingTags);
app.get('/tags/:id', tagController.listPostByTag);
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