import IUserDTO from './IUserDTO';

interface IEntityModel {
    create(user: IUserDTO): Promise<IUserDTO>;
    // delete(id: any): Promise<any>;
    // getAll(): Promise<any>;
    // getById(id: any): Promise<any>;
    // update(userDTO: any): Promise<any>;
}

export default IEntityModel;
