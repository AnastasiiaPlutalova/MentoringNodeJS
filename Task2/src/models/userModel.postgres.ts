import { injectable } from 'inversify';
import { IUserModel, IUserDomain, IUserDTO } from '../typing/interfaces';
import { UserMapper } from '../mapper';
import { UserModel, GroupModel, UserGroupModel, sequelize } from '../postgres/db-connection';

@injectable()
class User implements IUserModel {
    create = async (userDTO: IUserDTO): Promise<IUserDTO> => {
        const userDomain: IUserDomain = UserMapper.mapUserDTOToUserDomain(userDTO);
        const userPG = await UserModel.create(userDomain, { plain: true });
        const userCreated: IUserDTO = UserMapper.mapUserPGToUserDTO(userPG);
        return userCreated;
    }

    getAll = async (): Promise<IUserDTO[]> => {
        const usersPG = await UserModel.findAll(
            {
                paranoid: false,
                include: [
                    { model: GroupModel, as: 'groups', attributes: ['id', 'name', 'permissions'] }
                ]
            }
        );

        const usersDTO: IUserDTO[] = usersPG.map((u): IUserDTO => {
            const userPG = u.get({ plain: true });
            const userDTO = UserMapper.mapUserPGToUserDTO(userPG);
            return userDTO;
        });

        return usersDTO;
    }

    getById = async (id: string): Promise<IUserDTO> => {
        const userPG = await UserModel.findByPk(id,
            {
                paranoid: false,
                include: [
                    { model: GroupModel, as: 'groups', attributes: ['id', 'name', 'permissions'] }
                ]
            });
        const userDTO = UserMapper.mapUserPGToUserDTO(userPG.get({ plain: true }));
        return userDTO;
    }

    update = async (userDTO: IUserDTO): Promise<IUserDTO> => {
        const userPG = await UserModel.update(
            userDTO,
            {
                where: { id: userDTO.id },
                returning: true,
                plain: true
            });
        const userUpdated: IUserDTO = UserMapper.mapUserPGToUserDTO(userPG[1].dataValues);
        return userUpdated;
    }

    delete = async (id: string): Promise<void> => {
        await UserModel.destroy({
            where: { id }
        });
    }

    addUsersToGroup = async (user_id: string, group_id: string): Promise<void> => {
        await sequelize.transaction(t => {
            return UserGroupModel.create({ user_id, group_id }, { transaction: t });
            // toDo then with some success/fail ?
        });
    }
}

export default User;
