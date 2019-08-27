import IDTO from './IDTO';

interface IEntityService {
    create(dto: IDTO): Promise<IDTO>;
    getAll(): Promise<IDTO[]>;
    getById(id: string): Promise<IDTO>;
    update(userDTO: IDTO): Promise<IDTO>;
    delete(id: string): Promise<void>;
}

export default IEntityService;
