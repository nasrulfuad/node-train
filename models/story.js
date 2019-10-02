'use strict';

module.exports = (sequelize, DataTypes) => {
	const story = sequelize.define('story', {
		id: {
		    primaryKey: true,
		    type: DataTypes.UUID,
		    defaultValue: DataTypes.UUIDV4
		},
	    title: DataTypes.STRING
	}, {});

	story.associate = function(models) {
		// associations can be defined here
		story.belongsTo(models.Users, { as: 'author' })
		story.hasMany(models.Reviews)
	};

	return story;
};
