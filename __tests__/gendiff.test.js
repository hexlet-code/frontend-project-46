import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const stylishTxt = fs.readFileSync(getFixturePath('stylish.txt'), 'utf-8');
test ('stylish', () => {
    expect(gendiff('__fixtures__/file1.json','__fixtures__/file2.json')).toBe(stylishTxt);
})

