import dotenv from 'dotenv';
import { Container } from 'inversify';
import CONTRACTS from './typing/contracts';
import { UserController, GroupController } from './controllers';
import { IEntityController, IEntityService, IEntityModel } from './typing/interfaces';
import { UserService, GroupService } from './services';
import { userModel, groupModel } from './models';

dotenv.config();

const dbDialect = process.env.DB_DIALECT;
const UserModel = userModel[dbDialect];
const GroupModel = groupModel[dbDialect];

const container = new Container();

container.bind<IEntityController>(CONTRACTS.UserController).to(UserController);
container.bind<IEntityService>(CONTRACTS.UserService).to(UserService);
container.bind<IEntityModel>(CONTRACTS.UserModel).to(UserModel);

container.bind<IEntityController>(CONTRACTS.GroupController).to(GroupController);
container.bind<IEntityService>(CONTRACTS.GroupService).to(GroupService);
container.bind<IEntityModel>(CONTRACTS.GroupModel).to(GroupModel);

export default container;
