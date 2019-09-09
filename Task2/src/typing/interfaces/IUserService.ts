import { IUserDTO } from '.';

declare interface IUserService{
    create(dto: IUserDTO): Promise<IUserDTO>;
    getAll(): Promise<IUserDTO[]>;
    getById(id: string): Promise<IUserDTO>;
    update(userDTO: IUserDTO): Promise<IUserDTO>;
    delete(id: string): Promise<void>;
    addUsersToGroup(user_id: string, group_id: string): Promise<void>;
}

export default IUserService;
