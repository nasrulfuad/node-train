module.exports = {
	getAllAndPagination: async (model, q, option) => {
		const page = parseInt(q.page) || 1;
		const limit = parseInt(q.limit) || 10;

		let options = {
			offset: (page - 1) * limit,
			limit,
			order: [['createdAt', 'DESC']]
		};

		if (option) options = { ...options, ...option };
		let { count, rows } = await model.findAndCountAll(options);
		let no = (page - 1) * limit;
		rows = rows.map(r => {
			no++;
			r.dataValues.number = no;
			Object.keys(r).forEach(d => {
				r[d] = r[d];
			});
			return r;
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
