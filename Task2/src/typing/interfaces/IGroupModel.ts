import { IGroupDTO } from '.';

interface IGroupModel {
    create(group: IGroupDTO): Promise<IGroupDTO>;
    getAll(): Promise<IGroupDTO[]>;
    getById(id: string): Promise<IGroupDTO>;
    update(groupDTO: any): Promise<IGroupDTO>;
    delete(id: string): Promise<void>;
}

export default IGroupModel;
