module.exports = {
	responseApi: (s, c, m, data) => ({
		status: s ? s : false,
		code: c ? c : 200,
		message: m ? m : 'Success',
		data
	}),

	errHandler: fn => (req, res, next) => {
		try {
			const result = fn(req, res, next);
			return result.catch(next);
		} catch (err) {
			return next(err);
		}
	}
};
