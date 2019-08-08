export const DB_DIALECT = {
    POSTGRES: 'postgres',
    FILE: 'file'
};

export const RESPONSE = {
    SUCCESS: {
        message: 'success',
        status: 200
    },
    INTERNAL_SERVER_ERROR: {
        message: 'internal server error',
        status: 500
    },
    NOT_FOUND: {
        message: 'not found',
        status: 404
    }
};
