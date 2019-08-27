import Sequelize from 'sequelize';
import sequelize from './db-connection';

const User = sequelize.define('group', {
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permissions: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    timestamps: false,
    paranoid: false,
    underscored: true
});

export default User;
