import { Container } from 'inversify';
import TYPES from './typing/types';
import { UserController } from './controllers';
import { IEntityController, IEntityService } from './typing/interfaces';
import { UserService } from './services';

const container = new Container();

container.bind<IEntityController>(TYPES.IEntityController).to(UserController);
container.bind<IEntityService>(TYPES.IEntityController).to(UserService);

