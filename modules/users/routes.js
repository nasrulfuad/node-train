const router = require('express').Router();
const { get, create, update, remove } = require('./controllers');
const { errHandler } = require('../../core/helpers');

/*
    @route    GET /users
    @desc     Get all users
    @access   Public
*/
router.get('/', errHandler(get));

/*
    @route    POST /users
    @desc     Create new user
    @access   Public
*/
router.post('/', errHandler(create));

/*
    @route    PUT /users/:id
    @desc     Update user
    @access   Public
*/
router.put('/:id', errHandler(update));

/*
    @route    DELETE /users/:id
    @desc     Delete user
    @access   Public
*/
router.delete('/:id', errHandler(remove));

module.exports = router;
