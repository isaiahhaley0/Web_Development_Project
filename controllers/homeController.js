

exports.showIndex = (req,res) =>{
    res.render("home")
}

exports.showSignUp = (req,res) =>{
    res.render("signup", {layout: 'navlessLayout'})
}

exports.showLogIn = (req,res) =>{
    res.render("login",  {layout: 'navlessLayout'})
}

exports.noPage = (req,res) =>{
    res.render("error")
}