import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import squel from 'squel';
import query from '../postgres/db-connection';

dotenv.config();

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
            .setFields(user)
            .where(`id='${id}'`)
            .toString();
        const result = await query(queryString);
        return result;
    }

    deleteUser = async (id) => {
        console.log(id);
        const queryString = squel.update()
            .table('users')
            .set('isdeleted', true)
            .where(`id='${id}'`)
            .toString();
        await query(queryString);
    }
}

export default new User();
