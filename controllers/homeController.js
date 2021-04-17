
"use strict";
const passport = require("passport");
const User = require("../models/user");


exports.showIndex = (req,res) =>{
    res.render("home")
}

exports.showSignUp = (req,res) =>{
    res.render("signup", {layout: 'navlessLayout'})
}
exports.LogIn = (req,res, next)=>{
    var x = req.body;
    User.findOne({email:x.email}).then(function(doc){
        console.log(doc);
        if(doc.email===x.email && doc.password===x.password)
        {
            let cookDock = {email:x.email};
            res.cookie("email", x.email);
            res.redirect('/');


        }
        else{
            res.render("login", {layout: 'navlessLayout'});
        }
    });
}
exports.showLogIn = (req,res) =>{
    res.render("login",  {layout: 'navlessLayout'})
}

exports.noPage = (req,res) =>{
    res.render("error")
}

exports.showSearchPage = (req, res) =>  {
    res.render("search", {layout: 'navlessLayout'});
}