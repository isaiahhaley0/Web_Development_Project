const Tag = require("../models/tag")

exports.saveTag = (req, res) => {
    var my_tags = req.body.post_tags;
    my_tags = my_tags.split(" ");
    console.log(my_tags)
}