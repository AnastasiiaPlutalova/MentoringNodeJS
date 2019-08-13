interface IEntityService {
    create(userDTO: any): Promise<any>;
    delete(id: any): Promise<any>;
    getAll(): Promise<any>;
    getById(id: any): Promise<any>;
    update(userDTO: any): Promise<any>;
}

export default IEntityService;
