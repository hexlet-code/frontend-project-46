import path from 'path';
import yaml from 'js-yaml';

export default (file) => {
  const format = path.extname(file);
  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yaml':
      return yaml.load;
    case '.yml':
      return yaml.load;
    default:
      return `Данный формат ${format} не поддерживается`;
  }
};
