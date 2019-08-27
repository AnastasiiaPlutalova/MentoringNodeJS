import 'reflect-metadata';
import express from 'express';
import { userRouter, groupRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/group', groupRouter);

app.listen(3000);
