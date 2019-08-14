import uuidv4 from 'uuid/v4';
import { IUserDTO, IUserDomain } from '../typing/interfaces';

class UserMapper {
    static mapReqBodyToUserDTO(body: any): IUserDTO {
        const user: IUserDTO = {
            login: body.login,
            password: body.password,
            age: body.age,
            isDeleted: !!body.isDeleted
        };

        if (body.id) {
            user.id = body.id;
        }

        return user;
    }

    static mapUserDTOToUserDomain(userDTO: IUserDTO): IUserDomain {
        const userDomain: IUserDomain = {
            id: userDTO.id ? userDTO.id : uuidv4(),
            login: userDTO.login,
            password: userDTO.password,
            age: userDTO.age,
            isDeleted: userDTO.isDeleted
        };

        return userDomain;
    }
}

export default UserMapper;
