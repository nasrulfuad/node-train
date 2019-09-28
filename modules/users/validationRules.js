const presence = { allowEmpty: false }

module.exports = {
	createRules: {

		name: {
			presence,
			length: {
				minimum: 3,
				message: 'must be at least 3 characters'
			}
		},

		email: {
			presence,
			email: true
		},

		phone_number: {
			presence,
			length: {
				minimum: 12,
				maximum: 13,
				message: 'minimum 12 characters and maximum 13 characters'
			}
		},

		password: {
			presence,
			length: {
				minimum: 6,
				message: 'must be at least 6 characters'
			}
		}
	}
}
