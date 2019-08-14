import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

const userController = new UserController();

// router.get('/', userController.getAll);

// router.get('/:id', userController.getById);

router.post('/', userController.create);

// router.put('/', userController.update);

// router.delete('/:id', userController.delete);

export default router;
