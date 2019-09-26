const axios = require('axios');
const { Users } = require('../../models');
const { responseApi } = require('../../core/helpers');

module.exports = {
	get: async (req, res) => {
		const data = await Users.findAndCountAll();
		data.length === 0
			? res.json(responseApi(false, null, 'Empty', data.data || data))
			: res.json(responseApi(true, null, null, data.data || data));
	},

	create: async (req, res) => {
		const { name, email, phone_number, gender } = req.body;
		const data = await Users.create({ name, email, phone_number, gender });
		res.status(201).json(responseApi(null, 201, 'User Created', data));
	},

	update: async (req, res) => {
		const { name, email, phone_number, gender } = req.body;
		const data = await Users.update(
			{ name, email, phone_number, gender },
			{ where: { id: req.params.id } }
		);
		res.json({
			status: true,
			code: 200,
			message: 'Success to update user',
			data: { name, email, phone_number, gender }
		});
	}
};
