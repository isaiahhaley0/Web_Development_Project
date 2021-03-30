const mongoose = require("mongoose"),
    userSchema = mongoose.Schema({
        username: String,
        email: String
    });

module.exports = mongoose.model("User",userSchema);