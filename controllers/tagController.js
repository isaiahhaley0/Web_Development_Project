const Tag = require("../models/tag")
const Post = require("../models/posts");
mongoose = require("mongoose");
exports.saveTag = (req, res) => {
    var my_tags = req.body.post_tags;
    var my_id =req.body.post_ref;
    my_tags = my_tags.split(" ");
    var temp ;
    for(temp=0; temp < my_tags.length; temp++)
    {
        const filter = { name:my_tags[temp]}
        const options = {upsert: true}
        const updateDoc =
            {
                $inc:{
                    count:1
                },
                $push:{
                    posts: mongoose.Types.ObjectId(my_id)
                }
            }
            Tag.updateOne(filter,updateDoc,options).exec(

            ).catch(error=>{
                console.log(error)
            });
    }


}

exports.listTrendingTags = (req, res)=>{
    const options = {
        count:-1
    }
    Tag.find({}).sort(options).limit(20)
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
}