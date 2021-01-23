var express = require("express");
var { getPosts, createPost, updatePost, deletePost,likePost} =require("../controllers/index")
const router  = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.patch('/:id',updatePost);
router.delete('/:id', deletePost);
router.patch('/:id', likePost)

module.exports = router;