function logger(req, res, next) {
  // do your magic!
}

function validateUserId(req, res, next) {
  // do your magic!
    const { id } = req.params;
    if (typeof(id) !== "number" || id < 1 ) {
    res.status(401).json({ message: "please provide valide id"})
  } else {
    next()
  }
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
  const { id } = req.params;
  if (typeof(id) !== "number" || id < 1 ) {
    res.status(401).json({ message: "please provide valide id"})
  } else {
    next()
  }


}

// do not forget to expose these functions to other modules

module.exports = {
    logger,
    validateUserId,
    validateUser,
    validatePost

}
