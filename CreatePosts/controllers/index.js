var PostMessage = require('../modules/postMessage');
var mongoose = require('mongoose')
exports.getPosts = async (req, res) => {
try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage)
} catch (error) {
    res.status(404).json( {"geterror": error} )
}
}

exports.createPost = async (req, res) => { 
    const post = req.body;

    const newPostMessage =  new PostMessage(post);
  //   res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Credentials', true)
  // res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({"posterror": error})
    }
}
exports.updatePost = async (req,res) =>{
  const { id: _id} = req.params
  const Post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no Post found With this Id")
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, Post, {new:true})
    res.json(updatedPost)
}
exports.deletePost = async (req,res) => {
  const {id: _id} = req.params

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no Post found With this Id")

  await PostMessage.findByIdAndRemove(_id)
  res.send(`The Post with #{_id} is deleted`)
}
exports.likePost = async (req,res) =>{
   const { id: _id} = req.params

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no Post found With this Id")
  const Post = findByID(_id)
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, {likes:Post.likes+1}, {new:true})
    res.json(updatedPost)
}