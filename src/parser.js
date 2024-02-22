import path from 'path';
import yaml from 'js-yaml';

export default (file) => {
  const format = path.extname(file);
  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yaml' || '.yml':
      return yaml.load;
    default:
      console.log(`Данный формат ${format} не поддерживается`);
  }
};
