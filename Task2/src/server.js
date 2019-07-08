import express from 'express';
import { userRouter } from './routes';

const app = express();

app.use('/user', userRouter);

app.listen(3000);
