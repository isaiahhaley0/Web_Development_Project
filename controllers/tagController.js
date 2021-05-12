const Tag = require("../models/tag")

exports.saveTag = (req, res) => {
    var my_tags = req.body.post_tags;
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
                }
            }
            Tag.updateOne(filter,updateDoc,options).exec().catch(()=>{
                console.log("Success")
            });
    }


}

exports.listTrendingTags = (req, res)=>{
    Tag.find({})
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