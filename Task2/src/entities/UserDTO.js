class UserDTO {
    constructor(id, login, password, age, deletedAt) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.age = age;
        this.isDeleted = !!deletedAt;
    }
}

export default UserDTO;
