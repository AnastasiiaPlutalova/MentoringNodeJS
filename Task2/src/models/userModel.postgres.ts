import { injectable } from 'inversify';
import { IEntityModel, IUserDomain, IUserDTO } from '../typing/interfaces';
import { UserMapper } from '../mapper';

@injectable()
class User implements IEntityModel {
    create = async (userDTO: IUserDTO): Promise<IUserDTO> => {
        const userDomain: IUserDomain = UserMapper.mapUserDTOToUserDomain(userDTO);

        return userDTO;
        // toDo convert to Domain.PG
        // create in db
        // consvert result to DTO
        // return DTO
        // return await UserModel.create(userDomain);
    }

    // getAll = async () => {
    //     const usersPG = await UserModel.findAll({ paranoid: false });
    //     const users = usersPG.map(u => u.get({ plain: true }));
    //     return users;
    // }

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
