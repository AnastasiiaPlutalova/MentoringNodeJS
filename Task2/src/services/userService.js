import dotenv from 'dotenv';
import { userModel } from '../models';
import { DB_TYPE } from '../common/constants';

dotenv.config();

const UserModel = process.env.DB === DB_TYPE.POSTGRES ? userModel.postgres : userModel.file;

class UserService {
    getAll = async () => {
        return await UserModel.getAll();
    }

    getById = async (id) => {
        return await UserModel.getUserById(id);
    }

    create = async (user) => {
        return await UserModel.create(user);
    }

    update = async (user) => {
        return await UserModel.update(user);
    }

    delete = async (id) => {
        return await UserModel.delete(id);
    }
}

export default new UserService();
