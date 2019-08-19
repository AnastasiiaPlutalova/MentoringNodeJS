import IUserDTO from './IUserDTO';

interface IEntityModel {
    create(user: IUserDTO): Promise<IUserDTO>;
    getAll(): Promise<IUserDTO[]>;
    // delete(id: any): Promise<any>;
    // getById(id: any): Promise<any>;
    // update(userDTO: any): Promise<any>;
}

export default IEntityModel;
