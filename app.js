var createError = require('http-errors')
var express = require('express')
var path = require('path')
var logger = require('morgan')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', require('./modules/users').routes)

// catch 404 and forward to error handler
app.use((err, req, res, next) => {
	const { start, httpStatus, message, previousError, stack } = err
	console.log(stack)

	res.status(httpStatus || 406).json({
		status: false,
		code: httpStatus || 406,
		message,
		data: previousError
	})
})

module.exports = app
