const { TOO_MANY_REQUESTS } = require("http-status-codes")
const passportlocalMongoose= require("passport-local-mongoose");
const mongoose = require("mongoose"), 
{ Schema } = require ("mongoose"), 
Subscriber = require("./subscriber")
userSchema = new Schema(
    {
        name: {
            first: {
                type: String, 
                required: true
            },
            last: {
                type: String, 
                required: true
            }
        },
        email: {
            type: String, 
            required: true, 
            unique: true
        },
        zipCode: {
            type: Number, 
            min: [10000, "Zip code too short"],
            max: [99999]
        },
        password: {
            type: String, 
            required: true
        },
        followers: [{type: Schema.Types.ObjectId,unique: true}],
        subscribedAccount: {type: Schema.Types.ObjectId, ref: Subscriber}
    },
    {
        timestamps: true
    }
)

userSchema.virtual("fullName").get(function () {
    return `${this.name.first} ${this.name.last}`;
});

userSchema.pre("save", function(next) {
    let user = this;
    if(user.subscribedAccount == undefined) {
        Subscriber.findOne({
            email: user.email
        })
        .then(subscriber => {
            user.subscribedAccount = subscriber;
            next();
        })
        .catch(error => {
            console.log(`error in associating subscribe: ${error.message}`);
            next(error);
        })
    }
    else {
        next();
    }
})
userSchema.plugin(passportlocalMongoose,{
    usernameField:"email"
});
module.exports = mongoose.model("User", userSchema);

