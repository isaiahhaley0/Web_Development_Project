"use strict";

const mongoose = require("mongoose"),
tagSchema = mongoose.Schema({
    "name":{type:String, required: true},
    "count":{type:Number, required: true}
})

module.exports = mongoose.model("Tag",tagSchema);