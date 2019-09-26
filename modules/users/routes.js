const router = require('express').Router()
const { get, create } = require('./controllers')

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

module.exports = router
