import { IDTO, IGroupDTO } from '.';

interface IUserDTO extends IDTO {
    login: string;
    password?: string;
    age: number;
    isDeleted: boolean;
    // toDo type for groups
    groups?: IGroupDTO[];
}

export default IUserDTO;
