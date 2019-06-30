import { obj as _obj } from 'through2';

export const keysToLowerCase = (obj) => {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});
};


export const transformRow = _obj((chunk, enc, callback) => {
    const jsonRow = chunk.toString();
    const objRow = JSON.parse(jsonRow);
    const loweredKeysObj = keysToLowerCase(objRow);
    const result = `${JSON.stringify(loweredKeysObj)}\r\n`;
    callback(null, result);
});

export const propertyToRemove = 'Amount';
