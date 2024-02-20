import path from 'path';
import yaml from 'yaml';

export default (file) => {
  const format = path.extname(file);
  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.parse;
    case '.yaml':
      return yaml.parse;
    default:
      return 111;
  }
};
