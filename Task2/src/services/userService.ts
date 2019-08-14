import { injectable } from 'inversify';
import { IUserDTO, IUserDomain } from '../typing/interfaces';
import { UserMapper } from '../mapper';
import IEntityService from '../typing/interfaces/IEntityService';


@injectable()
class UserService implements IEntityService {
    create = async (userDTO: IUserDTO): Promise<IUserDomain> => {
        const userDomain: IUserDomain = UserMapper.mapUserDTOToUserDomain(userDTO);


        return userDomain;
        // const userDB = await UserModel.create(userDTO);

        // if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
        //     return mapPGUserToDTO(userDB);
        // }

        // return userDB;
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
