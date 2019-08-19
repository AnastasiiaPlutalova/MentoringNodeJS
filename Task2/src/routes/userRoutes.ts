import express from 'express';
import container from '../inversify.config';
import { IEntityController } from '../typing/interfaces';
import CONTRACTS from '../typing/contracts';

const controller = container.get<IEntityController>(CONTRACTS.IEntityController);

const router = express.Router();


// router.get('/', userController.getAll);

// router.get('/:id', userController.getById);

router.post('/', controller.create);

// router.put('/', userController.update);

// router.delete('/:id', userController.delete);

export default router;
