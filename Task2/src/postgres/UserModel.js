import Sequelize from 'sequelize';
import uuidv4 from 'uuid/v4';
import sequelize from './db-connection';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        defaultValue: uuidv4(),
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
},
{
    timestamps: true,
    paranoid: true,
    underscored: true
});

export default User;
