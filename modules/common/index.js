module.exports = {
	getAllAndPagination: async (model, q) => {
		const page = parseInt(q.page) || 1;
		const limit = parseInt(q.limit) || 10;

		const { count, rows } = await model.findAndCountAll({
			offset: (page - 1) * limit,
			limit,
			order: [['createdAt', 'DESC']]
		});

		return {
			totalPage: Math.ceil(count / limit),
			totalData: count,
			totalRows: rows.length,
			page,
			rows
		};
	}
};
