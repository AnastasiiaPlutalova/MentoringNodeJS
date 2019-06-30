import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import csv from 'csvtojson';
import { obj as _obj } from 'through2';

const csvPath = join(__dirname, '../data/books.csv');
const txtPath = join(__dirname, '../data/books.txt');
const stream = createReadStream(csvPath);
const propertyToRemove = 'Amount';

const keysToLowerCase = (obj) => {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});
};

const transformRow = _obj((chunk, enc, callback) => {
    const jsonRow = chunk.toString();
    const objRow = JSON.parse(jsonRow);
    delete objRow[propertyToRemove];
    const loweredKeysObj = keysToLowerCase(objRow);
    const result = `${JSON.stringify(loweredKeysObj)}\r\n`;
    callback(null, result);
})

stream
    .pipe(csv())
    .pipe(transformRow)
    .pipe(createWriteStream(txtPath))
    .on('error', (e) => { console.log(e.message) })
    .on('end', () => { console.log('Done') });