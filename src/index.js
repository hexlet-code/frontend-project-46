import fs from 'fs';
import baildTree from './baildTree.js';
import getParsing from './parsing/getParsing.js';
import parser from './parser.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const file1Parser = parser(filepath1);
  const file2Parser = parser(filepath2);

  const file1 = file1Parser(fs.readFileSync(filepath1, 'utf-8'));
  const file2 = file2Parser(fs.readFileSync(filepath2, 'utf-8'));

  const tree = baildTree(file1, file2);
  return getParsing(tree, format);
};
