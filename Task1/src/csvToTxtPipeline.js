import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import csv from 'csvtojson';
import { pipeline } from 'stream';
import { transformRow, propertyToRemove } from './utils';

const csvPath = join(__dirname, '../data/books.csv');
const txtPath = join(__dirname, '../data/books_pipeline.txt');

pipeline(
    createReadStream(csvPath),
    csv({
      colParser:{
          [propertyToRemove]:"omit"
      },
  }),
    transformRow,
    createWriteStream(txtPath),
    (err) => {
        if (err) {
          console.error('Pipeline failed.', err.message);
        } else {
          console.log('Pipeline succeeded.');
        }
      }
);