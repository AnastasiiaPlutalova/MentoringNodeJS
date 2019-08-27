import { IDTO } from '.';

interface IUserDTO extends IDTO {
    login: string;
    password?: string;
    age: number;
    isDeleted: boolean;
}

export default IUserDTO;
