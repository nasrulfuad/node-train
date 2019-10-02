'use strict';

module.exports = (sequelize, DataTypes) => {
    const profiles = sequelize.define( 'profiles', {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            address: DataTypes.STRING
        },
        {}
    );

    profiles.associate = models => profiles.belongsTo(models.Users);

    return profiles;
};
