import fs from 'fs';
import path from 'path';
import util from 'util';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import { IEntityModel, IUserDomain } from '../typing/interfaces';

dotenv.config();

// const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dir = process.env.FILE_DB_DIR;
const jsonFile = process.env.USER_JSON;
const dbPath = path.join(process.cwd(), dir, jsonFile);

class User implements IEntityModel {
    // getAll = async () => {
    //     const fileData = await readFile(dbPath);
    //     const users = JSON.parse(fileData.toString());
    //     return users;
    // }

    // getById = async (id) => {
    //     const users = await this.getAll();
    //     const user = users.find(u => u.id === id);
    //     return user;
    // }

    create = async (userDomain: IUserDomain): Promise<any> => {
        const users = [];
        // const users = await this.getAll();
        const id = uuidv4();
        const user = {
            ...userDomain,
            id
        };

        users.push(user);

        await writeFile(dbPath, JSON.stringify(users));

        return user;
    }

    // update = async (updateUser) => {
    //     const user = await this.getById(updateUser.id);
    //     if (user) {
    //         const users = await this.getAll();
    //         const index = users.findIndex(u => u.id === updateUser.id);
    //         users[index] = {
    //             ...updateUser
    //         };

    //         await writeFile(dbPath, JSON.stringify(users));

    //         return users[index];
    //     }

    //     throw new Error('User not found');
    // }

    // delete = async (id) => {
    //     const user = await this.getById(id);
    //     if (user) {
    //         const users = await this.getAll();
    //         const index = users.findIndex(u => u.id === id);
    //         users[index].isDeleted = true;

    //         await writeFile(dbPath, JSON.stringify(users));

    //         return users[index];
    //     }

    //     throw new Error('User not found');
    // }
}

export default new User();
