'use strict'

const validator = (req, res, next) => {
  if(req.query.name){
    next()
  } else {
    next('Please enter your name')
  }
}

module.exports = validator;