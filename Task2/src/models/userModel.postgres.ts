import { injectable } from 'inversify';
import { IEntityModel, IUserDomain, IUserDTO } from '../typing/interfaces';
import { UserMapper } from '../mapper';
import UserModel from '../postgres/UserModel';

@injectable()
class User implements IEntityModel {
    create = async (userDTO: IUserDTO): Promise<IUserDTO> => {
        const userDomain: IUserDomain = UserMapper.mapUserDTOToUserDomain(userDTO);
        const userPG = await UserModel.create(userDomain, { plain: true });
        const userCreated: IUserDTO = UserMapper.mapUserPGToUserDTO(userPG);
        return userCreated;
    }

    getAll = async (): Promise<IUserDTO[]> => {
        const usersPG = await UserModel.findAll({ paranoid: false });
        const usersDTO: IUserDTO[] = usersPG.map((u): IUserDTO => {
            const userPG = u.get({ plain: true });
            const userDTO = UserMapper.mapUserPGToUserDTO(userPG);
            return userDTO;
        });

        return usersDTO;
    }

    // getById = async (id) => {
    //     const userPG = await UserModel.findByPk(id, { paranoid: false });
    //     const user = userPG.get({ plain: true });
    //     return user;
    // }

    // update = async (userDTO) => {
    //     const userPG = await UserModel.update(
    //         userDTO,
    //         {
    //             where: { id: userDTO.id },
    //             returning: true,
    //             plain: true
    //         });

    //     return userPG[1].dataValues;
    // }

    // delete = async (id) => {
    //     await UserModel.destroy({
    //         where: { id }
    //     });
    // }
}

export default User;
