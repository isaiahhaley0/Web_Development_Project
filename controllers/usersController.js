const User = require("../models/user");

exports.getAllUsers = (req, res) => {
    User.find({})
        .exec()
        .then(users => {
            res.render("users", {users: users})
        })
        .catch((error) => {
            console.log(error);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        })
};

exports.getUsersPage = (req, res) => {
    res.render("signup");
};

exports.saveUser = (res, res) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password1
    });
    newUser.save()
    .then(() => {
        res.render("home");
    })
    .catch(error => {res.send(error)})
};
