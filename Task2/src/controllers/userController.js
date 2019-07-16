import { UserService } from '../services';

class UserController {
    getUsers = async (req, res) => {
        try {
            const users = await UserService.getUsers();
            return res.status(200).json({ status: 200, data: users, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }

    getUserById = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(id);
            if (user) {
                return res.status(200).json({ status: 200, data: user, message: 'SUCCESS' });
            }
            return res.status(404).json({ status: 404, data: user, message: 'EMPTY' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }

    createUser = async (req, res) => {
        try {
            const { user } = req.body;
            const newUser = await UserService.createUser(user);
            return res.status(200).json({ status: 200, data: newUser, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }

    updateUser = async (req, res) => {
        try {
            const { user } = req.body;
            const updatedUser = await UserService.updateUser(user);
            return res.status(200).json({ status: 200, data: updatedUser, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserService.deleteUser(id);
            return res.status(200).json({ status: 200, data: user, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }
}

export default new UserController();
