const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const through2 = require('through2');

const csvPath = path.join(__dirname, '../data/books.csv');
const txtPath = path.join(__dirname, '../data/books.txt');
const stream = fs.createReadStream(csvPath);
const propertyToRemove = 'Amount';

const keysToLowerCase = (obj) => {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});
};

const transformRow = through2.obj((chunk, enc, callback) => {
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
    .pipe(fs.createWriteStream(txtPath))
    .on('error', (e) => { console.log(e.message) })
    .on('end', () => { console.log('Done') });