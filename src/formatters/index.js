import stylishParse from './stylishParse.js';
import flatFormatParse from './flatFormatParse.js';
import jsonParse from './jsonParse.js';

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylishParse(tree);
    case 'plain':
      return flatFormatParse(tree);
    case 'json':
      return jsonParse(tree);
    default:
      return 1112;
  }
};
