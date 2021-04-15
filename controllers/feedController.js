const Post = require("../models/posts");

exports.getAllPosts = (req, res) => {
    Post.find().toArray(function(err, documents) {
        res.json(documents);
    });
};