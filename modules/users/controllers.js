const axios = require('axios')
const { users } = require('../../models')

module.exports = {
	get: async (req, res) => {
		const users = await users.findAll()
		if (users.length === 0) {
			res.json({
				status: false,
				message: 'Empty',
				data: users.data || users
			})
		}
		res.json({
			status: true,
			message: 'Success',
			data: users.data || users
		})
	},

	create: async (req, res) => {
		res.send('Ok')
	}
}
