import { injectable, inject } from 'inversify';
import { IUserDTO, IEntityModel } from '../typing/interfaces';
import IEntityService from '../typing/interfaces/IEntityService';
import CONTRACTS from '../typing/contracts';

@injectable()
class UserService implements IEntityService {
    @inject(CONTRACTS.IEntityModel) private _userModel: IEntityModel;

    create = async (userDTO: IUserDTO): Promise<IUserDTO> => {
        // toDo validate DTO
        const userNew: IUserDTO = await this._userModel.create(userDTO);
        return userNew;
    }

    // getAll = async (): Promise<any> => {
    //     const usersDB = await UserModel.getAll();

    //     if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
    //         return usersDB.map(u => mapPGUserToDTO(u));
    //     }

    //     return usersDB;
    // }

    // getById = async (id: any): Promise<any> => {
    //     const userDB = await UserModel.getById(id);

    //     if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
    //         return mapPGUserToDTO(userDB);
    //     }

    //     return userDB;
    // }

    // update = async (userDTO: any): Promise<any> => {
    //     const userDB = await UserModel.update(userDTO);

    //     if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
    //         return mapPGUserToDTO(userDB);
    //     }

    //     return userDB;
    // }

    // delete = async (id: any): Promise<any> => {
    //     await UserModel.delete(id);
    // }
}

export default UserService;
