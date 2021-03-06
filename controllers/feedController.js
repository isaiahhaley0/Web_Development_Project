"use strict";
const passport = require("passport");
const Post = require("../models/posts");
const User = require("../models/user");
const Tag = require("../models/tag")
const mongoose = require("mongoose");
    exports.getAllPosts = (req, res) => {
    Post.find({})
        .exec()
        .then(posts => {
            res.json(posts)
        })
        .catch((error) => {
            console.log(error);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        })
};


exports.getPostsByFollow= (req,res)=>{


    User.findById(req.cookies.id).exec().then(tgs => {
            console.log(tgs.followers)
            Post.find({post_author: tgs.followers}).exec().then(result =>{
                console.log(result)
                res.json(result)
            })
        }
    )
}

exports.loadMessages = (req,res) =>{
    res.render("./posts/notifications", {layout: 'layout'})
}




exports.getMyPosts = (req,res)=>{
    console.log(req.cookies.email)
    Post.find({post_author:req.cookies.email}).exec()
        .then(posts => {
            res.json(posts)
        })
        .catch((error) => {
            console.log(error);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        })
}

exports.deletePost = (req, res) => {
    console.log(req.body.id)
    Post.findByIdAndRemove(req.body.id).then(()=>
    {
        console.log(req.body.id)

    })
}

exports.savePost = (req, res) => {
    var my_tags = req.body.post_tags;
    my_tags = my_tags.split(" ")
    let newPost = new Post({
        post_title: req.body.post_title,
        post_author: req.body.post_author,
        post_content: req.body.post_content,
        post_tags: req.body.post_tags,
        post_id: req.body.post_id,
        list_tags: my_tags
         });
    var pid = newPost._id;
    console.log(pid);
    const result = Post.create(newPost, function (err, doc) {
    res.json({
        postid: newPost._id
    })
    })
};
