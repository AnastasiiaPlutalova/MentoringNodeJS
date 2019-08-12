class UserDTO {
    public id;
    public login;
    public password;
    public age;
    public isDeleted;

    constructor(id, login, password, age, deletedAt = false) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.age = age;
        this.isDeleted = !!deletedAt;
    }
}

export default UserDTO;
