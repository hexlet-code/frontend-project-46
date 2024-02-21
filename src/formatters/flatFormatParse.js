import _ from 'lodash';

const isObject = (value) => {
  if (_.isObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const makeStr = (el, names) => {
  const path = [names, el.name].join('.').slice(1);
  switch (el.type) {
    case 'added':
      return `Property '${path}' was added with value: ${isObject(el.value)}`;
    case 'removed':
      return `Property '${path}' was removed`;
    case 'changed':
      return `Property '${path}' was updated. From ${isObject(el.firstValue)} to ${isObject(el.secondValue)}`;
    default:
      return '';
  }
};

export default (tree) => {
  const iter = (data, names) => Object.values(data).reduce((acc, el) => {
    const resultStr = el.type === 'nested' ? iter(el.children, ([names, el.name].join('.'))) : makeStr(el, names);
    return [...acc, resultStr];
  }, []).filter((el) => el.startsWith('Property')).join('\n');
  return iter(tree, []);
};
