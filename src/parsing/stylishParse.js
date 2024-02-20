import _ from "lodash";

const geT = (data,lvl) => {
  console.log(lvl);
  if (!_.isObject(data)) return data;
  const iter = (data, count) => Object.entries(data).reduce((acc,[key, value]) => {
    const step = '  '.repeat(count * 2);
    if(_.isObject(value)) {
      console.log(key);
      console.log(value);
      console.log(lvl);
      const steps = '  '.repeat(count * 2);
      return `${acc}\n${steps}${key}: ${iter(value, count + 1)}\n${step}}`
    }
    return `${acc}\n${step}${key}: ${value}`;
  },'{');
  if(lvl === 1) lvl+=1;
  return iter(data,lvl) + `\n${'    '.repeat(lvl - 1)}}`
}

export default (tree) => {
  const iter = (data, lvl) => Object.values(data).reduce((acc,el) => {
    const step = '  '.repeat(lvl);
    const stepLasted = '  '.repeat(lvl + 1);
     if(el.type === 'nested') return `${acc}\n${step}  ${el.name}: ${iter(el.children, lvl + 2)}\n${stepLasted}}`;
     if(el.type === 'added') return `${acc}\n${step}+ ${el.name}: ${geT(el.value, lvl)}`;
     if(el.type === 'removed') return `${acc}\n${step}- ${el.name}: ${geT(el.value,lvl)}`;
     if(el.type === 'changed') return `${acc}\n${step}- ${el.name}: ${geT(el.firstValue,lvl)}\n${step}+ ${el.name}: ${geT(el.secondValue,lvl)}`;
     if(el.type === 'unchanged') return `${acc}\n${step}  ${el.name}: ${geT(el.value,lvl)}`;
    },'{');
  return iter(tree, 1) + `\n}`
}