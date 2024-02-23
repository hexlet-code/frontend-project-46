import _ from 'lodash';

const repeatOpen = (count) => '  '.repeat(count);
const repeatClodes = (count) => '    '.repeat(count);
const render = (obj, lvls) => {
  if (!_.isObject(obj)) return obj;
  const iter = (data, count) => Object.entries(data).reduce((acc, [key, value]) => {
    const step = repeatOpen(count * 2);
    if (_.isObject(value)) {
      return `${acc}\n${step}${key}: ${iter(value, count + 1)}\n${step}}`;
    }
    return `${acc}\n${step}${key}: ${value}`;
  }, '{');
  const counter = lvls === 1 ? lvls + 1 : lvls;
  return `${iter(obj, counter)}\n${repeatClodes(counter - 1)}}`;
};

export default (el, lvl) => {
  switch (el.type) {
    case 'added':
      return `+ ${el.name}: ${render(el.value, lvl)}`;
    case 'removed':
      return `- ${el.name}: ${render(el.value, lvl)}`;
    case 'changed':
      return `- ${el.name}: ${render(el.firstValue, lvl)}\n${repeatOpen(lvl)}+ ${el.name}: ${render(el.secondValue, lvl)}`;
    case 'unchanged':
      return `  ${el.name}: ${render(el.value, lvl)}`;
    default:
      return `Невозможно определить структуру обьекта: ${el}`;
  }
};
