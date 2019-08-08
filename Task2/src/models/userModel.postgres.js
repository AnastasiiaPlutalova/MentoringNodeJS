import UserModel from '../postgres/UserModel';

class User {
    create = async (user) => {
        return await UserModel.create(user);
    }

    getAll = async () => {
        const usersPG = await UserModel.findAll({ paranoid: false });
        const users = usersPG.map(u => u.get({ plain: true }));
        return users;
    }

    getById = async (id) => {
        const userPG = await UserModel.findByPk(id, { paranoid: false });
        const user = userPG.get({ plain: true });
        return user;
    }

    update = async (userDTO) => {
        const userPG = await UserModel.update(
            userDTO,
            {
                where: { id: userDTO.id },
                returning: true,
                plain: true
            });

        return userPG[1].dataValues;
    }

    delete = async (id) => {
        await UserModel.destroy({
            where: { id }
        });
    }
}

export default new User();
