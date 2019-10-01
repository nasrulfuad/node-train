'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define( 'users', {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            gender: DataTypes.BOOLEAN
        },
        {}
    );

    users.associate = function(models) {
        // associations can be defined here
        users.hasOne(models.Profile)
    };

    users.hashPassword = p => bcrypt.hashSync(p, bcrypt.genSaltSync(10));

    return users;
};
