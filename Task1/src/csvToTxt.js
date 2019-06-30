import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import csv from 'csvtojson';
import { transformRow } from './utils';

const csvPath = join(__dirname, '../data/books.csv');
const txtPath = join(__dirname, '../data/books.txt');
const stream = createReadStream(csvPath);

stream
    .pipe(csv())
    .pipe(transformRow)
    .pipe(createWriteStream(txtPath))
    .on('error', (e) => { console.log(e.message) })
    .on('end', () => { console.log('Done') });