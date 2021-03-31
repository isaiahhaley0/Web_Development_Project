const mongoose = require("mongoose"),
    useSchema = mongoose.Schema({
        username: String, 
        email: String, 
        password: String
    });

module.exports = mongoose.model("User", userSchema)