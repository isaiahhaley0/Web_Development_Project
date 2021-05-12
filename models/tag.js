"use strict";

var Post = require("./posts")
const mongoose = require("mongoose"),
tagSchema = mongoose.Schema({
    "name":{type:String, required: true},
    "count":{type:Number, required: true},
    "posts":[{type:mongoose.Schema.Types.ObjectId,ref:Post}]
})

module.exports = mongoose.model("Tag",tagSchema);