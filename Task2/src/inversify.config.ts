import dotenv from 'dotenv';
import { Container } from 'inversify';
import CONTRACTS from './typing/contracts';
import { UserController, GroupController } from './controllers';
import * as interfaces from './typing/interfaces';
import { UserService, GroupService } from './services';
import { userModel, groupModel } from './models';

dotenv.config();

const dbDialect = process.env.DB_DIALECT;
const UserModel = userModel[dbDialect];
const GroupModel = groupModel[dbDialect];

const container = new Container();

container.bind<interfaces.IUserController>(CONTRACTS.UserController).to(UserController);
container.bind<interfaces.IUserService>(CONTRACTS.UserService).to(UserService);
container.bind<interfaces.IUserModel>(CONTRACTS.UserModel).to(UserModel);

container.bind<interfaces.IGroupController>(CONTRACTS.GroupController).to(GroupController);
container.bind<interfaces.IGroupService>(CONTRACTS.GroupService).to(GroupService);
container.bind<interfaces.IGroupModel>(CONTRACTS.GroupModel).to(GroupModel);

export default container;
