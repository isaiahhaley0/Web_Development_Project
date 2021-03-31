const mongoose = require("mongoose"),
    userSchema = mongoose.Schema({
        username: String, 
        email: String, 
        password: String
    });

module.exports = mongoose.model("User", userSchema);

