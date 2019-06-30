import { obj as _obj } from 'through2';

const keysToLowerCase = (obj) => {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});
};
const propertyToRemove = 'Amount';


export const transformRow = _obj((chunk, enc, callback) => {
    const jsonRow = chunk.toString();
    const objRow = JSON.parse(jsonRow);
    delete objRow[propertyToRemove];
    const loweredKeysObj = keysToLowerCase(objRow);
    const result = `${JSON.stringify(loweredKeysObj)}\r\n`;
    callback(null, result);
});
