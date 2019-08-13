import { injectable } from 'inversify';
import dotenv from 'dotenv';
import { userModel } from '../models';
import { DB_DIALECT } from '../common/constants';
import { mapPGUserToDTO } from '../entities';
import { IEntityService } from '../typing/interfaces';

dotenv.config();

const UserModel = process.env.DB_DIALECT === DB_DIALECT.POSTGRES ? userModel.postgres : userModel.file;

@injectable()
class UserService implements IEntityService {
    create = async (userDTO: any): Promise<any> => {
        const userDB = await UserModel.create(userDTO);

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return mapPGUserToDTO(userDB);
        }

        return userDB;
    }

    getAll = async (): Promise<any> => {
        const usersDB = await UserModel.getAll();

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return usersDB.map(u => mapPGUserToDTO(u));
        }

        return usersDB;
    }

    getById = async (id: any): Promise<any> => {
        const userDB = await UserModel.getById(id);

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return mapPGUserToDTO(userDB);
        }

        return userDB;
    }

    update = async (userDTO: any): Promise<any> => {
        const userDB = await UserModel.update(userDTO);

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return mapPGUserToDTO(userDB);
        }

        return userDB;
    }

    delete = async (id: any): Promise<any> => {
        await UserModel.delete(id);
    }
}

export default UserService;
