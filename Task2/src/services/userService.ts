import { injectable, inject } from 'inversify';
import { IUserDTO, IEntityModel } from '../typing/interfaces';
import IEntityService from '../typing/interfaces/IEntityService';
import CONTRACTS from '../typing/contracts';

@injectable()
class UserService implements IEntityService {
    @inject(CONTRACTS.IEntityModel) private _userModel: IEntityModel;

    create = async (userDTO: IUserDTO): Promise<IUserDTO> => {
        const userNew: IUserDTO = await this._userModel.create(userDTO);
        return userNew;
    }

    getAll = async (): Promise<IUserDTO[]> => {
        const userDTOs: IUserDTO[] = await this._userModel.getAll();
        return userDTOs;
    }

    getById = async (id: string): Promise<IUserDTO> => {
        const userDTO = await this._userModel.getById(id);
        return userDTO;
    }

    update = async (userDTO: IUserDTO): Promise<any> => {
        const userUpdated = await this._userModel.update(userDTO);
        return userUpdated;
    }

    // delete = async (id: any): Promise<any> => {
    //     await UserModel.delete(id);
    // }
}

export default UserService;
