import { UserService } from '../services';

class UserController {
    getAll = async (req, res) => {
        try {
            const users = await UserService.getAll();
            return res.status(200).json({ status: 200, data: users, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: 'Server error' });
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserService.getById(id);
            if (user) {
                return res.status(200).json({ status: 200, data: user, message: 'SUCCESS' });
            }
            return res.status(404).json({ status: 404, data: user, message: 'EMPTY' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }

    create = async (req, res) => {
        try {
            const { user } = req.body;
            const newUser = await UserService.create(user);
            return res.status(200).json({ status: 200, data: newUser, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }

    update = async (req, res) => {
        try {
            const { user } = req.body;
            const updatedUser = await UserService.update(user);
            return res.status(200).json({ status: 200, data: updatedUser, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserService.delete(id);
            return res.status(200).json({ status: 200, data: user, message: 'SUCCESS' });
        } catch (e) {
            return res.status(500).json({ status: 500, message: e.message });
        }
    }
}

export default new UserController();
