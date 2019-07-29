import fs from 'fs';
import path from 'path';
import util from 'util';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import squel from 'squel';
import query from '../postgres/db-connection';

dotenv.config();

const writeFile = util.promisify(fs.writeFile);


const dir = process.env.FILE_DB_DIR;
const jsonFile = process.env.USER_JSON;
const dbPath = path.join(process.cwd(), dir, jsonFile);

class User {
    getUsers = async () => {
        const queryString = squel.select()
            .from('users')
            .toString();
        const result = await query(queryString);
        return result;
    }

    getUserById = async (id) => {
        const queryString = squel.select()
            .from('users')
            .where(`id='${id}'`)
            .limit(1)
            .toString();
        const result = await query(queryString);
        return result[0];
    }

    createUser = async (newUser) => {
        const id = uuidv4();
        const user = {
            id,
            ...newUser
        };

        const queryString = squel.insert()
            .into('users')
            .setFields(user)
            .toString();


        await query(queryString);

        return user;
    }

    updateUser = async (user) => {
        const { id } = user;
        const queryString = squel.update()
            .table('users')
            .set(user)
            .where(`id='${id}'`)
            .toString();
        const result = await query(queryString);
        return result;
    }

    deleteUser = async (id) => {
        const user = await this.getUserById(id);
        if (user) {
            user.isdeleted = true;
            console.log(user);
            await this.updateUser(user);
        }

        throw new Error('User not found');
    }
}

export default new User();
