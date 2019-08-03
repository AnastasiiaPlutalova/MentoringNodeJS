import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import squel from 'squel';
import query from '../postgres/db-connection';

dotenv.config();

class User {
    getAll = async () => {
        const queryString = squel.select()
            .from('users')
            .toString();
        const result = await query(queryString);
        return result;
    }

    getById = async (id) => {
        const queryString = squel.select()
            .from('users')
            .where(`id='${id}'`)
            .limit(1)
            .toString();
        const result = await query(queryString);
        return result[0];
    }

    create = async (newUser) => {
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

    update = async (user) => {
        const { id } = user;
        const queryString = squel.update()
            .table('users')
            .setFields(user)
            .where(`id='${id}'`)
            .toString();
        const result = await query(queryString);
        return result;
    }

    delete = async (id) => {
        const queryString = squel.update()
            .table('users')
            .set('isdeleted', true)
            .where(`id='${id}'`)
            .toString();
        await query(queryString);
    }
}

export default new User();
