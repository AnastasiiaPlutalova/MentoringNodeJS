import dotenv from 'dotenv';
import * as Sequelize from 'sequelize';

dotenv.config();
const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, DB_DIALECT } = process.env;

const CONNECTION_STR = `${DB_DIALECT}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DB}`;

export const sequelize: any = new Sequelize.Sequelize(CONNECTION_STR);

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
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

const Group = sequelize.define('groups', {
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

const UserGroup = sequelize.define('usergroup', {
    user_id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    group_id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    }
},
{
    timestamps: false,
    paranoid: false,
    underscored: true,
    freezeTableName: true
});

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup, onDelete: 'CASCADE' });

export const UserModel = User;
export const GroupModel = Group;
export const UserGroupModel = UserGroup;
