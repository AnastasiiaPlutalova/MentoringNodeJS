import userFile from './userModel.file';
import userPostgres from './userModel.postgres';

export const userModel = {
    file: userFile,
    postgres: userPostgres
};
