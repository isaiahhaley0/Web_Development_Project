
const User = require("../models/user");

exports.getAllUsers = (req, res) => {
    User.find({})
        .exec()
        .then(users => {
            res.render("users", {users: users})
        })
        .catch((error) => {
            console.log(error);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        })
};
exports.deleteUser = (req,res)=>{
    var data = req.body.username;
    User.findOneAndRemove({username:data}).then(res.json({"message":"success"}));
}
exports.getUsersPage = (req, res) => {
    res.render("signup", {layout: 'navlessLayout'});
};

exports.saveUser = (req, res) => {
    let newUser = new User({
        username: req.body.Username,
        email: req.body.email,
        password: req.body.password1
    });
    newUser.save()
    .then(() => {
        res.render("security", {layout: 'navlessLayout'});
    })
    .catch(error => {res.send(error)})
};
exports.getMyProfile = (req,res) =>{
    let currentUser = "staff";
    User.findOne({username:currentUser}).then(function(doc){
        res.render("users/show",{usr:doc} );
    });

};

exports.editUser = (req,res)=>{
    let data = req.body;
    let profileToUpdate  = data.oldusername;
    var filter ={username: profileToUpdate};
    var update={username: data.username, password: data.password, email: data.email};
    var option={new: true};
    User.findOneAndUpdate(filter , update , option).then(posts => {
        res.json({message:"Success"})
    })
        .catch((error) => {
            console.log(error);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        })
}


exports.editProfile = (req,res) =>{
    let currentUser = "staff";
    User.findOne({username:currentUser}).then(function(doc){
        res.render("users/edit",{usr:doc} );
    });

};
exports.getSecurityPage = (req, res) => {
    res.render("security", {layout: 'navlessLayout'});
};

exports.deleteAccount = (req,res)=>
{
    res.render("users/delete");
};