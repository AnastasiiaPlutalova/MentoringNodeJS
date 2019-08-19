import IUserDTO from './IUserDTO';

interface IEntityModel {
    create(user: IUserDTO): Promise<IUserDTO>;
    getAll(): Promise<IUserDTO[]>;
    getById(id: string): Promise<IUserDTO>;
    update(userDTO: any): Promise<IUserDTO>;
    delete(id: string): Promise<void>;
}

export default IEntityModel;
