import { injectable } from 'inversify';
import fs from 'fs';
import path from 'path';
import util from 'util';
import dotenv from 'dotenv';
import uuidv4 from 'uuid/v4';
import { IGroupModel, IGroupDTO } from '../typing/interfaces';

dotenv.config();

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dir = process.env.FILE_DB_DIR;
const jsonFile = process.env.USER_JSON;
const dbPath = path.join(process.cwd(), dir, jsonFile);

@injectable()
class Group implements IGroupModel {
    getAll = async (): Promise<IGroupDTO[]> => {
        const fileData = await readFile(dbPath);
        const groups = JSON.parse(fileData.toString());
        return groups;
    }

    getById = async (id: string): Promise<IGroupDTO> => {
        const groups = await this.getAll();
        const group = groups.find(u => u.id === id);
        return group;
    }

    create = async (groupDomain: IGroupDTO): Promise<any> => {
        const groups = [];
        // const groups = await this.getAll();
        const id = uuidv4();
        const group = {
            ...groupDomain,
            id
        };

        groups.push(group);

        await writeFile(dbPath, JSON.stringify(groups));

        return group;
    }

    update = async (updateGroup) => {
        const group = await this.getById(updateGroup.id);
        if (group) {
            const groups = await this.getAll();
            const index = groups.findIndex(u => u.id === updateGroup.id);
            groups[index] = {
                ...updateGroup
            };

            await writeFile(dbPath, JSON.stringify(groups));

            return groups[index];
        }

        throw new Error('Group not found');
    }

    delete = async (id): Promise<void> => {
        const group = await this.getById(id);
        if (group) {
            const groups = await this.getAll();
            const cleanGrops = groups.filter(g => g.id === id);

            await writeFile(dbPath, JSON.stringify(cleanGrops));
        }

        throw new Error('Group not found');
    }
}

export default Group;
