const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const through2 = require('through2');
const pipeline = require('stream');

const csvPath = path.join(__dirname, '../data/books.csv');
const txtPath = path.join(__dirname, '../data/books_pipeline.txt');
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

pipeline(
    fs.createReadStream(csvPath),
    transformRow,
    fs.createWriteStream(txtPath),
    (err) => {
        if (err) {
          console.error('Pipeline failed.', err.message);
        } else {
          console.log('Pipeline succeeded.');
        }
      }
);