module.exports = {
	responseApi: (s, c, m, data) => ({
		status: s ? s : false,
		code: c ? c : 200,
		message: m ? m : 'Success',
		data
	})
};
