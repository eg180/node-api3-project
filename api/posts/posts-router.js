const express = require('express');
const Posts = require('./posts-model.js');

const validatePost = require("../middleware.js")

const router = express.Router();


router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE POSTS
  Posts.get()
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(err => {
    res.status(400).json(err.error)
  })
});

router.get('/:id', validatePost, (req, res) => {
  // RETURN THE POST OBJECT
  // this needs a middleware to verify post id
  const { id } = req.params;
  Posts.getById(id)
  .then(post => {
    res.status(200).json(post)
  })

});

// do not forget to export the router
module.exports = router;