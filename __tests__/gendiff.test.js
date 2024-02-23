import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const format = ['stylish', 'plain', 'json'];
const paths = ['json', 'yml', 'yaml'];

test('test', () => {
  format.forEach((fm) => {
    paths.forEach((pth) => {
      const result = gendiff(`__fixtures__/file1.${pth}`, `__fixtures__/file2.${pth}`, fm);
      expect(result).toBe(fs.readFileSync(getFixturePath(`${fm}.txt`), 'utf-8'));
    });
  });
});
