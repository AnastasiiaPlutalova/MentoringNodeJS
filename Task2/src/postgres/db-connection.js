import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();
const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, DB_DIALECT } = process.env;

const CONNECTION_STR = `${DB_DIALECT}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DB}`;

const sequelize = new Sequelize(CONNECTION_STR);

export default sequelize;
