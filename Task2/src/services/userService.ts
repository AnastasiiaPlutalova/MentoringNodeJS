import dotenv from 'dotenv';
import { userModel } from '../models';
import { DB_DIALECT } from '../common/constants';
import { mapPGUserToDTO } from '../entities';

dotenv.config();

const UserModel = process.env.DB_DIALECT === DB_DIALECT.POSTGRES ? userModel.postgres : userModel.file;

class UserService {
    create = async (userDTO) => {
        const userDB = await UserModel.create(userDTO);

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return mapPGUserToDTO(userDB);
        }

        return userDB;
    }

    getAll = async () => {
        const usersDB = await UserModel.getAll();

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return usersDB.map(u => mapPGUserToDTO(u));
        }

        return usersDB;
    }

    getById = async (id) => {
        const userDB = await UserModel.getById(id);

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return mapPGUserToDTO(userDB);
        }

        return userDB;
    }

    update = async (userDTO) => {
        const userDB = await UserModel.update(userDTO);

        if (process.env.DB_DIALECT === DB_DIALECT.POSTGRES) {
            return mapPGUserToDTO(userDB);
        }

        return userDB;
    }

    delete = async (id) => {
        await UserModel.delete(id);
    }
}

export default new UserService();
