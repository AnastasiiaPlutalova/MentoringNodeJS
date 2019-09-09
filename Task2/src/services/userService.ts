import { injectable, inject } from 'inversify';
import { IUserDTO, IUserModel, IUserService } from '../typing/interfaces';
import CONTRACTS from '../typing/contracts';

@injectable()
class UserService implements IUserService {
    @inject(CONTRACTS.UserModel) private _userModel: IUserModel;

    create = async (userDTO: IUserDTO): Promise<IUserDTO> => {
        const userNew: IUserDTO = await this._userModel.create(userDTO) as IUserDTO;
        return userNew;
    }

    getAll = async (): Promise<IUserDTO[]> => {
        const userDTOs: IUserDTO[] = await this._userModel.getAll() as IUserDTO[];
        return userDTOs;
    }

    getById = async (id: string): Promise<IUserDTO> => {
        const userDTO = await this._userModel.getById(id) as IUserDTO;
        return userDTO;
    }

    update = async (userDTO: IUserDTO): Promise<any> => {
        const userUpdated: IUserDTO = await this._userModel.update(userDTO) as IUserDTO;
        return userUpdated;
    }

    delete = async (id: any): Promise<any> => {
        await this._userModel.delete(id);
    }

    addUsersToGroup = async (user_id: string, group_id: string): Promise<void> => {
        await this._userModel.addUsersToGroup(user_id, group_id);
    }
}

export default UserService;
