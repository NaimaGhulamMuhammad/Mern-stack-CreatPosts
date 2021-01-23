var mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: String,
    desription: String,
    uName: String,
    tags: [String],
    image: String,
    likes: {
        type: Number,
        default: 0
    },
    timeStamp:{
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', PostSchema);
module.exports =  PostMessage;