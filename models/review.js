'use strict';

module.exports = (sequelize, DataTypes) => {
	const reviews = sequelize.define('reviews', {
		id: {
		    primaryKey: true,
		    type: DataTypes.UUID,
		    defaultValue: DataTypes.UUIDV4
		},
		rating: DataTypes.DECIMAL(5, 1)
	}, {});

	reviews.associate = function(models) {
		// associations can be defined here
		reviews.belongsTo(models.Users, { as: 'reviewer' })
		reviews.belongsTo(models.Story)
	};

	return reviews;
};
