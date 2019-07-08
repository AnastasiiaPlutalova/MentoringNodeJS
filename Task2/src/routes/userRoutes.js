import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router.get('/', UserController.getUsers);

export default router;
