import { IDTO } from '.';

interface IEntityModel {
    create(user: IDTO): Promise<IDTO>;
    getAll(): Promise<IDTO[]>;
    getById(id: string): Promise<IDTO>;
    update(userDTO: any): Promise<IDTO>;
    delete(id: string): Promise<void>;
}

export default IEntityModel;
