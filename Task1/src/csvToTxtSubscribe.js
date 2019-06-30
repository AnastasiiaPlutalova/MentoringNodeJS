import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import csv from 'csvtojson';
import { keysToLowerCase, propertyToRemove } from './utils';

const csvPath = join(__dirname, '../data/books.csv');
const txtPath = join(__dirname, '../data/books_subscribe.txt');
const stream = createReadStream(csvPath);
const writeStream = createWriteStream(txtPath);

const onError = (error) => console.log(error.message);
const onComplite = () => console.log('Done');

csv({
    colParser: {
        [propertyToRemove]: "omit"
    }
})
    .fromStream(stream)
    .subscribe((obj) => {
        const loweredKeysObj = keysToLowerCase(obj);
        const result = `${JSON.stringify(loweredKeysObj)}\r\n`;
        writeStream.write(result);
    }, onError, onComplite);
