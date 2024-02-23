import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const stylish = fs.readFileSync(getFixturePath('stylish.txt'), 'utf-8');
const plain = fs.readFileSync(getFixturePath('plain.txt'), 'utf-8');
const json = fs.readFileSync(getFixturePath('json.txt'), 'utf-8');
test('stylish', () => {
  const result1 = gendiff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(result1).toBe(stylish);
});
test('plain', () => {
  const result2 = gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain');
  expect(result2).toBe(plain);
});
test('json', () => {
  const result3 = gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json');
  expect(result3).toBe(json);
});
