import express from 'express';
import container from '../inversify.config';
import { IGroupController } from '../typing/interfaces';
import CONTRACTS from '../typing/contracts';

const controller = container.get<IGroupController>(CONTRACTS.GroupController);

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

export default router;
