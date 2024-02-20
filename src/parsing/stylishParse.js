import _ from 'lodash';

const geT = (data, lvl) => {
//   console.log(lvl);
  if (!_.isObject(data)) return data;
  const iters = (data, count) => Object.entries(data).reduce((acc, [key, value]) => {
    const step = '  '.repeat(count * 2);
    if (_.isObject(value)) {
      const steps = '  '.repeat(count * 2);
      return `${acc}\n${steps}${key}: ${iters(value, count + 1)}\n${step}}`;
    }
    return `${acc}\n${step}${key}: ${value}`;
  }, '{');
    if (lvl === 1) lvl += 1;
  return iters(data, lvl) + `\n${'    '.repeat(lvl - 1)}}`;
};

export default (tree) => {
  const iter = (data, lvls) => Object.values(data).reduce((acc, el) => {
    const step = '  '.repeat(lvls);
    const stepLasted = '  '.repeat(lvls + 1);
    if (el.type === 'nested') return `${acc}\n${step}  ${el.name}: ${iter(el.children, lvls + 2)}\n${stepLasted}}`;
    if (el.type === 'added') return `${acc}\n${step}+ ${el.name}: ${geT(el.value, lvls)}`;
    if (el.type === 'removed') return `${acc}\n${step}- ${el.name}: ${geT(el.value, lvls)}`;
    if (el.type === 'changed') return `${acc}\n${step}- ${el.name}: ${geT(el.firstValue, lvls)}\n${step}+ ${el.name}: ${geT(el.secondValue, lvls)}`;
    if (el.type === 'unchanged') return `${acc}\n${step}  ${el.name}: ${geT(el.value, lvls)}`;
  }, '{');
  return `${iter(tree, 1)}\n}`;
};
