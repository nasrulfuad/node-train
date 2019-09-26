const router = require('express').Router()
const { get, create, update } = require('./controllers')

const wrap = fn => (req, res, next) => {
  try {
    const result = fn(req, res, next)
    return result.catch(next)
  } catch (err) {
    return next(err)
  }
}

/*
  @route    GET /users
  @desc     Get all users
  @access   Public
*/
router.get('/', wrap(get))

/*
  @route    POST /users
  @desc     Create new user
  @access   Public
*/
router.post('/', wrap(create))

/*
  @route    PUT /users
  @desc     Update user
  @access   Public
*/
router.put('/:id', wrap(update))

module.exports = router
