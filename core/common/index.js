const validate = require('validate.js')

module.exports = {
	/*
		@desc  function helper for adding paginate
	*/
	getAllAndPagination: async (model, q, option) => {
		const page = parseInt(q.page) || 1;
		const limit = parseInt(q.limit) || 10;
		const startIndex = (page - 1) * limit;
		let no = startIndex;

		let options = {
			offset: startIndex,
			limit,
			order: [['createdAt', 'DESC']]
		};

		if (option) options = { ...options, ...option };
		let { count, rows } = await model.findAndCountAll(options);

		/*
			Adding number every rows
		*/
		rows = rows.map(r => {
			r.dataValues.number = ++no;
			Object.keys(r).forEach(d => {
				r[d] = r[d];
			});
			return r;
		});

		const previous = (startIndex > 0) ? { page: page - 1, limit} : undefined;
		const next = ((page * limit) < count) ? { page: page + 1 , limit } : undefined;

		return {
			totalDatas: count,
			totalPages: Math.ceil(count / limit),
			cuurentPage: page,
			next,
			previous,
			rows
		};
	},




	validation: (attributes, constraint) => validate(attributes, constraint)
};
