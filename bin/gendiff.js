#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2, option) => {
      const res = gendiff(filepath1, filepath2, option.format);
      console.log(res);
  });

program.parse();
