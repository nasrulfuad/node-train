const { User } = require('../../models');
const { responseApi } = require('../../core/helpers');
const { getAllAndPagination, validation } = require('../../core/common');
const { createRules } = require('./validationRules')

module.exports = {
	get: async (req, res) => {
		const data = await getAllAndPagination(User, req.query, {
			attributes: { exclude: ['updatedAt', 'password'] }
		});

		data.totalRows === 0
			? res.json(responseApi(false, null, 'User is empty', data.rows))
			: res.json(responseApi(true, null, null, data));
	},

	create: async (req, res) => {
		const { name, email, phone_number, gender, password } = req.body;
		const errors = validation(req.body, createRules)

		if (errors) return res.status(422).json(responseApi(false, 422, { status: 'Validation Error', text: errors }, req.body))

		const [{ dataValues }, isCreated] = await User.findOrCreate({ 
			where: { email }, defaults: { name, phone_number, gender, password: User.hashPassword(password) }
		});

		dataValues.password = undefined
		return isCreated
			? res.status(201).json(responseApi(null, 201, 'User Created', dataValues))
			: res.status(422).json(responseApi(false, 422, 'Email is already exist'));
	},

	update: async (req, res) => {
		const { name, email, phone_number, gender } = req.body;
		const { id } = req.params;

		const [isUpdated] = await User.update(
			{ name, email, phone_number, gender },
			{ where: { id } }
		);

		return isUpdated
			? res.json(responseApi(null, null, 'User Updated'))
			: res.status(400).json(responseApi(false, 400, 'User not found'));
	},

	remove: async (req, res) => {
		const { id } = req.params;
		const isDeleted = await User.destroy({ where: { id } });

		return isDeleted
			? res.json(responseApi(null, null, 'User Deleted'))
			: res.status(400).json(responseApi(false, 400, 'User not found'));
	}
};
