import express from 'express';
import container from '../inversify.config';
import { IEntityController } from '../typing/interfaces';
import CONTRACTS from '../typing/contracts';

const controller = container.get<IEntityController>(CONTRACTS.IEntityController);

const router = express.Router();

router.post('/', controller.create);

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

// router.put('/', userController.update);

// router.delete('/:id', userController.delete);

export default router;
