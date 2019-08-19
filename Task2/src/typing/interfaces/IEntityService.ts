import IUserDTO from './IUserDTO';

interface IEntityService {
    create(userDTO: IUserDTO): Promise<IUserDTO>;
    getAll(): Promise<IUserDTO[]>;
    getById(id: string): Promise<IUserDTO>;
    update(userDTO: IUserDTO): Promise<IUserDTO>;
    // delete(req: Request, res: Response): Promise<any>;
}

export default IEntityService;
