import express from 'express';
import container from '../inversify.config';
import { IUserController } from '../typing/interfaces';
import CONTRACTS from '../typing/contracts';

const controller = container.get<IUserController>(CONTRACTS.UserController);

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/', controller.update);
router.delete('/:id', controller.delete);
router.put('/:user_id/group/:group_id', controller.addUsersToGroup);

export default router;
