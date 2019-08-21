import IUserDTO from './IUserDTO';

interface IEntityService {
    create(userDTO: IUserDTO): Promise<IUserDTO>;
    getAll(): Promise<IUserDTO[]>;
    getById(id: string): Promise<IUserDTO>;
    update(userDTO: IUserDTO): Promise<IUserDTO>;
    delete(id: string): Promise<void>;
}

export default IEntityService;
