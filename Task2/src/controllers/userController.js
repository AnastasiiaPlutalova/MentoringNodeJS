class UserController {
    getUsers = (req, res) => {
        res.send('Get all users from service!!!');
    }

    getUserById = (req, res) => {
        res.send(req.params.id);
    }

    createUser = (req, res) => {
        res.send('create');
    }

    updateUser = (req, res) => {
        res.send('update');
    }

    deleteUser = (req, res) => {
        res.send('delete');
    }
}

export default new UserController();
