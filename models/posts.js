"use strict";

const mongoose = require("mongoose"),
    postSchema = mongoose.Schema({
        post_title: {type:String, required: true},
        post_author: {type:String, required: true},
        post_content: {type:String, required: true},
        post_tags: {type:String},
        post_id:{type:Number,required:true},
        list_tags: [{type: String}]
    });
module.exports = mongoose.model("Post", postSchema);