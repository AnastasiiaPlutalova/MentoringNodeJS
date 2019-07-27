// import express from 'express';
// import { userRouter } from './routes';

// const app = express();

// app.use(express.json());

// app.use('/user', userRouter);

// app.listen(3000);


const { Client } = require('pg');

const CONNECTION_STR = 'postgres://test1:test1@db/db-test';
const client = new Client(CONNECTION_STR);

init();

async function init() {
    await client.connect();

    client.query('SELECT * FROM Users ORDER BY id ASC', (err, res) => {
        if (err) {
            console.log('ERROR: ', err);
        } else {
            console.log(res.rows);
        }
        client.end();
    });
}

