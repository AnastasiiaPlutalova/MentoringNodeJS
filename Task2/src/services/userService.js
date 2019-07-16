import { UserModel } from '../models';

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
