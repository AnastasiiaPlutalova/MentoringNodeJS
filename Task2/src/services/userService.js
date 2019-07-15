class UserService {
    getUsers = async () => {
        return 'all users';
    }

    getUserById = async (id) => {
        return `id: ${id}`;
    }

    createUser = async (user) => {
        return `create: ${JSON.stringify(user)}`;
    }

    createUser = async (user) => {
        return `update: ${JSON.stringify(user)}`;
    }

    createUser = async (id) => {
        return `delete: ${id}`;
    }
}

export default new UserService();
