import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router.get('/', UserController.getUsers);

router.get('/:id', UserController.getUserById);

router.post('/', UserController.createUser);

router.put('/', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

export default router;
