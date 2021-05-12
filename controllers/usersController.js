"use strict";
const passport = require("passport");
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
exports.deleteUser = (req,res)=>{
    var data = req.body.email;
    User.findOneAndRemove({email:data}).then(res.redirect('/'));

}
exports.getUsersPage = (req, res) => {
    res.render("signup", {layout: 'navlessLayout'});
};

exports.saveUser = (req, res) => {
    let newUser = new User({
        name:
            {
                first: req.body.firstName,
                last: req.body.lastName,
            },
        email: req.body.email,
        password: req.body.password1
    });
    newUser.save()
    .then(() => {
        res.render("security", {layout: 'navlessLayout'});
    })
    .catch(error => {res.send(error)})
};
exports.getMyProfile = (req,res) =>{
    var email = decodeURIComponent(req.headers.cookie).split("=")[1];
    User.findOne({email:email}).then(function(doc){
        res.render("users/show",{usr:doc} );
    });

};

exports.editUser = (req,res)=>{
    let data = req.body;
    let profileToUpdate  = data.email;
    var filter ={email: profileToUpdate};
    var update={name:
    {
        first:data.firstName,
        last:data.lastName
    },
        password: data.password1
    }
        ;
    var option={new: true};
    User.findOneAndUpdate(filter , update , option).then(posts => {
        res.json({message:"Success"})
    })
        .catch((error) => {
            console.log(error);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        })
}


exports.editProfile = (req,res) =>{
    let currentUser = "staff";
    User.findOne({username:currentUser}).then(function(doc){
        res.render("users/edit",{usr:doc} );
    });

};
exports.getSecurityPage = (req, res) => {
    res.render("security", {layout: 'navlessLayout'});
};

exports.deleteAccount = (req,res)=>
{
    res.render("users/delete");
};

exports.validate = (req, res, next) => {
    req.sanitizeBody("email").normalizeEmail({
        all_lowercase: true
    }).trim();
    req.check("email", "email is not valid!").isEmail();
    // req.check("zipCode", "Zip Code is not valid!").notEmpty().isInt().isLength({
    //     min: 5,
    //     max: 5
    // });
    req.check("password", "Password can not be empty").notEmpty();

    req.getValidationResult().then((error) => {
        if(!error.isEmpty()) {
            let messages = error.array().map (e => e.msg);
            req.flash("error", messages.join(" and "));
            req.skip = true;
            res.locals.redirect = "/users/new";
            next();
        }
        else next();
    });
};
module.create = (req, res, next) => {
    let newUser = new User;
  User.create(newUser)
    .then(user => {
      req.flash("success", `${user.fullName}'s account created
 successfully!`);
      res.locals.redirect = "/subscribe";
      res.locals.user = user;
      next();
    })
    .catch(error => {
      console.log(`Error saving user: ${error.message}`);
      res.locals.redirect = "/users/new";
      req.flash(
        "error",
        `Failed to create user account because:  ${error.message}.`
      );
      next();
    });
};
module.login = (req, res) => {
    res.render("/login");
  },
  
module.authenticate = (req, res, next) => {
User.findOne({
    email: req.body.email
})
    .then(user => {
        if (user && user.password === req.body.password){
        res.locals.redirect = `/users/${user._id}`;
        req.flash("success", `${user.fullName}'s logged in successfully!`);
        res.locals.user = user;
        next();
    } else {
    req.flash("error", "Your account or password is incorrect.Please try again or contact your system administrator!");
    res.locals.redirect = "/users/login";
    next();
    }
})
    .catch(error => {
        console.log(`Error logging in user: ${error.message}`);
        next(error);
    });
};
module.redirectView = (req, res, next) => {
    let redirectPath = "/login";
    if(redirectPath != undefined)res.redirect(redirectPath);
    else next();
}