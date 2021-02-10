const express = require('express');
const Users = require("./users-model.js");

const validateUserId = require("../middleware.js")

const router = express.Router();

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Users.get()
  .then(users => {
    res.status(200).json(users)
  })

});

router.get('/:id', validateUserId, (req, res) => {

  const { id } = req.params;
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
    Users.getById(id)
  .then(user => {
    res.status(200).json(user)
  })
});

router.post('/', (req, res) => {
  const { user } = req.body; 
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  Users.insert(user)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(401).json(err.error)
  })
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { changes } = req.body;
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  Users.update(id, changes)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(401).json(err.error)
  })
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  const { id } = req.params;

  Users.remove(id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(401).json(err.error)
  })
  
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  const { id } = req.params;
  Users.getUserPosts(id)
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(err => {
    res.status(401).json(err.error)
  })
});

// router.post('/:id/posts', (req, res) => {
//   const { id } = req.body;
//   const {}
//   // RETURN THE NEWLY CREATED USER POST
//   // this needs a middleware to verify user id
//   // and another middleware to check that the request body is valid
// });

// do not forget to export the router
module.exports = router;