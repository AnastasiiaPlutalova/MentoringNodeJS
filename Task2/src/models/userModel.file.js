import fs from 'fs';
import path from 'path';
import util from 'util';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';

dotenv.config();

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dir = process.env.FILE_DB_DIR;
const jsonFile = process.env.USER_JSON;
const dbPath = path.join(process.cwd(), dir, jsonFile);

class User {
    getUsers = async () => {
        const fileData = await readFile(dbPath);
        const users = JSON.parse(fileData);
        return users;
    }

    getUserById = async (id) => {
        const users = await this.getUsers();
        const user = users.find(u => u.id === id);
        return user;
    }

    createUser = async (newUser) => {
        const users = await this.getUsers();
        const id = uuidv4();
        const user = {
            ...newUser,
            id
        };

        users.push(user);

        await writeFile(dbPath, JSON.stringify(users));

        return user;
    }

    updateUser = async (updateUser) => {
        const user = await this.getUserById(updateUser.id);
        if (user) {
            const users = await this.getUsers();
            const index = users.findIndex(u => u.id === updateUser.id);
            users[index] = {
                ...updateUser
            };

            await writeFile(dbPath, JSON.stringify(users));

            return users[index];
        }

        throw new Error('User not found');
    }

    deleteUser = async (id) => {
        const user = await this.getUserById(id);
        if (user) {
            const users = await this.getUsers();
            const index = users.findIndex(u => u.id === id);
            users[index].isDeleted = true;

            await writeFile(dbPath, JSON.stringify(users));

            return users[index];
        }

        throw new Error('User not found');
    }
}

export default new User();
