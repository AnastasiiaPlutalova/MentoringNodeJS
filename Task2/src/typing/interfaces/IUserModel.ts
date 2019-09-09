import { IUserDTO } from '.';

declare interface IUserModel {
    create(user: IUserDTO): Promise<IUserDTO>;
    getAll(): Promise<IUserDTO[]>;
    getById(id: string): Promise<IUserDTO>;
    update(userDTO: any): Promise<IUserDTO>;
    delete(id: string): Promise<void>;
    addUsersToGroup(user_id: string, group_id: string): Promise<void>;
}

export default IUserModel;
