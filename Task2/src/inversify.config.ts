import dotenv from 'dotenv';
import { Container } from 'inversify';
import CONTRACTS from './typing/contracts';
import { UserController } from './controllers';
import { IEntityController, IEntityModel } from './typing/interfaces';
import { UserService } from './services';
import { userModel } from './models';
import IEntityService from './typing/interfaces/IEntityService';

dotenv.config();

const dbDialect = process.env.DB_DIALECT;
const UserModel = userModel[dbDialect];

const container = new Container();

container.bind<IEntityController>(CONTRACTS.IEntityController).to(UserController);
container.bind<IEntityController>(CONTRACTS.IEntityController).to(UserController);
container.bind<IEntityService>(CONTRACTS.IEntityService).to(UserService);
container.bind<IEntityModel>(CONTRACTS.IEntityModel).to(UserModel);
