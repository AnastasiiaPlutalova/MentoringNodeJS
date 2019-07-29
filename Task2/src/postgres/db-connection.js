import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST } = process.env;

const CONNECTION_STR = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DB}`;

const pool = new Pool({
    connectionString: CONNECTION_STR
});

const query = async (queryString) => {
    try {
        const client = await pool.connect();
        const result = await client.query(queryString);
        client.release();
        return result.rows;
    } catch (e) {
        throw new Error(e);
    }
};

export default query;
