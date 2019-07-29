import dotenv from 'dotenv';
import { userModel } from '../models';
import { DB_TYPE } from '../common/constants';

dotenv.config();

const UserModel = process.env.DB === DB_TYPE.POSTGRES ? userModel.postgres : userModel.file;

class UserService {
    getUsers = async () => {
        return await UserModel.getUsers();
    }

    getUserById = async (id) => {
        return await UserModel.getUserById(id);
    }

    createUser = async (user) => {
        return await UserModel.createUser(user);
    }

    updateUser = async (user) => {
        return await UserModel.updateUser(user);
    }

    deleteUser = async (id) => {
        return await UserModel.deleteUser(id);
    }
}

export default new UserService();
