// cors = require('cors');

const express = require('express');
const middlewares = require('./middleware.js');

const postsRouter = require("./posts/posts-router.js");
const usersRouter = require("./users/router.js");



const server = express();
// server.use(cors())
server.use(express.json());
server.use(postsRouter);
server.use(usersRouter);
server.use(middlewares.logger);

// remember express by default cannot parse JSON in request bodies

// global middlewares and routes need to be connected here

server.get('/', middlewares.logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
