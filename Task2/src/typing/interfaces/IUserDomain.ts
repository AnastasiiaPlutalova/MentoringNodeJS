interface IUserDomain {
    id: string;
    login: string;
    password?: string;
    age: number;
    isDeleted: boolean;
}

export default IUserDomain;
