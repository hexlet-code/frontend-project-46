import makeStr from './makeStr.js';

export default (tree) => {
  const iter = (data, lvl) => Object.values(data).reduce((acc, el) => {
    const step = '  '.repeat(lvl);
    const resultStr = el.type === 'nested' ? `  ${el.name}: ${iter(el.children, lvl + 2)}\n${'  '.repeat(lvl + 1)}}` : makeStr(el, lvl);
    return `${acc}\n${step}${resultStr}`;
  }, '{');
  return `${iter(tree, 1)}\n}`;
};
