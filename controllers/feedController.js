const Post = require("../models/posts");
cors = require("cors")
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

exports.savePost = (req, res) => {
    let newPost = new Post({
        post_title: req.body.post_title,
        post_author: req.body.post_author,
        post_content: req.body.post_content,
        post_id: req.body.post_id
         });
    newPost.save()
        .then(() => {
            res.json({message: "success"});
        })
        .catch(error => {res.send(error)})
};
