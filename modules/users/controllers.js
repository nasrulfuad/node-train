const { Users, Profiles, Story, Reviews } = require('../../models');
const { responseApi } = require('../../core/helpers');
const { getAllAndPagination, validation } = require('../../core/common');
const { createRules } = require('./validationRules');

module.exports = {
	get: async (req, res) => {
		const data = await getAllAndPagination(Users, req.query, {
			attributes: { exclude: ['updatedAt', 'password'] },
			include: [
				{
					model: Profiles,
					attributes: { exclude: ['updatedAt', 'createdAt'] }
				},
				{
					model: Story,
					attributes: {
						exclude: ['updatedAt', 'createdAt', 'authorId']
					}
				},
				{
					model: Reviews,
					attributes: {
						exclude: ['updatedAt', 'createdAt']
					},
					include: [Story]
				}
			]
		});

		data.totalRows === 0
			? res.json(responseApi(false, null, 'User is empty', data.rows))
			: res.json(responseApi(true, null, null, data));
	},

	create: async (req, res) => {
		const { name, email, phone_number, gender, password } = req.body;
		const errors = validation(req.body, createRules);

		if (errors)
			return res
				.status(422)
				.json(
					responseApi(
						false,
						422,
						{ status: 'Validation Error', text: errors },
						req.body
					)
				);

		const [{ dataValues }, isCreated] = await Users.findOrCreate({
			where: { email },
			defaults: {
				name,
				phone_number,
				gender,
				password: Users.hashPassword(password)
			}
		});

		dataValues.password = undefined;
		return isCreated
			? res
					.status(201)
					.json(responseApi(null, 201, 'User Created', dataValues))
			: res
					.status(422)
					.json(responseApi(false, 422, 'Email is already exist'));
	},

	update: async (req, res) => {
		const { name, email, phone_number, gender } = req.body;
		const { id } = req.params;

		const [isUpdated] = await Users.update(
			{ name, email, phone_number, gender },
			{ where: { id } }
		);

		return isUpdated
			? res.json(responseApi(null, null, 'User Updated'))
			: res.status(400).json(responseApi(false, 400, 'User not found'));
	},

	remove: async (req, res) => {
		const { id } = req.params;
		const isDeleted = await Users.destroy({ where: { id } });

		return isDeleted
			? res.json(responseApi(null, null, 'User Deleted'))
			: res.status(400).json(responseApi(false, 400, 'User not found'));
	}
};
