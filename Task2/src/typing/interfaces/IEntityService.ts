import IUserDTO from './IUserDTO';

interface IEntityService {
    create(userDTO: IUserDTO): Promise<IUserDTO>;
    getAll(): Promise<IUserDTO[]>;
    // delete(req: Request, res: Response): Promise<any>;
    // getById(req: Request, res: Response): Promise<any>;
    // update(req: Request, res: Response): Promise<any>;
}

export default IEntityService;
