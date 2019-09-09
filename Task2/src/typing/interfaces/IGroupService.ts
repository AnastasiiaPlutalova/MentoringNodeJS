import { IGroupDTO } from '.';

interface IGroupService {
    create(dto: IGroupDTO): Promise<IGroupDTO>;
    getAll(): Promise<IGroupDTO[]>;
    getById(id: string): Promise<IGroupDTO>;
    update(userDTO: IGroupDTO): Promise<IGroupDTO>;
    delete(id: string): Promise<void>;
}

export default IGroupService;
