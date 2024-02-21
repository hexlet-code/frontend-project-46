import stylishParse from '../formatters/stylishParse.js';
import flatFormatParse from '../formatters/flatFormatParse.js';
import jsonParse from './jsonParse.js';
export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylishParse(tree);
      case 'format':
        return flatFormatParse(tree);
        case 'json':
        return jsonParse(tree);
    default:
      return 111;
  }
};