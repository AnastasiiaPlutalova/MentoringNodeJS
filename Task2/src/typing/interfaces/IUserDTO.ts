import { IGroupDTO } from '.';

interface IUserDTO {
    id?: string;
    login: string;
    password?: string;
    age: number;
    isDeleted: boolean;
    groups?: IGroupDTO[];
}

export default IUserDTO;
