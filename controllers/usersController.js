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