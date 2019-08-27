import userFile from './userModel.file';
import userPostgres from './userModel.postgres';
import groupFile from './groupModel.file';
import groupPostgres from './groupModel.postgres';

export const userModel = {
    file: userFile,
    postgres: userPostgres
};

export const groupModel = {
    file: groupFile,
    postgres: groupPostgres
};

