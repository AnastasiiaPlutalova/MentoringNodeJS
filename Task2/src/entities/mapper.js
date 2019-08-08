import UserDTO from './UserDTO';

export const mapBodyToUser = (body) => {
    const { id, login, password, age } = body.user;
    const result = new UserDTO(id, login, password, age);
    return result;
};

export const mapPGUserToDTO = (pgUser) => {
    const { id, login, password, age, deletedAt } = pgUser;
    const result = new UserDTO(id, login, password, age, deletedAt);
    return result;
};
