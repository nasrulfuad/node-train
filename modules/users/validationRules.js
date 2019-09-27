module.exports = {
	createRules: {
		name: {
			presence: {
				allowEmpty: false
			},
			length: {
				minimum: 3,
				message: 'must be at least 3 characters'
			}
		},
		email: {
			presence: {
				allowEmpty: false
			},
			email: true
		},
		password: {
			presence: {
				allowEmpty: false
			},
			length: {
				minimum: 6,
				message: 'must be at least 6 characters'
			}
		}
	}
}
