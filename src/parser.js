import path from 'path';
import yaml from 'js-yaml';

export default (file) => {
  const format = path.extname(file);
  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.load;
    case '.yaml':
      return yaml.load;
    default:
      return 111;
  }
};
