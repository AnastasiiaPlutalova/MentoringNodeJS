class UserController {
    getUsers = (req, res) => {
        res.send('Get all users from service!!!');
    }
}

export default new UserController();
