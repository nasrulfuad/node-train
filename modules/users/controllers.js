const axios = require('axios')
const { Users } = require('../../models')

module.exports = {
	get: async (req, res) => {
		const data = await Users.findAll()
		if (data.length === 0)
			res.json({
				status: false,
				code: 200,
				message: 'Empty',
				data: data.data || data
			})
		else
			res.json({
				status: true,
				message: 'Success',
				data: data.data || data
			})
	},

	create: async (req, res) => {
		const { name, email, phone_number, gender } = req.body
		const data = await Users.create({ name, email, phone_number, gender })
		res.json({
			status: true,
			code: 200,
			message: 'Success',
			data
		})
	},

	update: async (req, res) => {
		const { name, email, phone_number, gender } = req.body
		const data = await Users.update(
			{ name, email, phone_number, gender },
			{ where: { id: req.params.id } }
		)
		res.json({
			status: true,
			code: 200,
			message: 'Success to update user',
			data: { name, email, phone_number, gender }
		})
	}
}
