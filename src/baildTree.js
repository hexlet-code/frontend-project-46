import _ from 'lodash';

const baildTree = (data1, data2) => {
  const commonKeys = _.union(_.keys(data1), _.keys(data2));
  const result = commonKeys
    .map((key) => {
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        return { name: key, type: 'nested', children: baildTree(data1[key], data2[key]) };
      }
      if (!_.has(data1, key)) {
        return { name: key, type: 'added', value: data2[key] };
      }
      if (!_.has(data2, key)) {
        return { name: key, type: 'removed', value: data1[key] };
      }

      if ((data1[key] !== data2[key])) {
        return {
          name: key,
          type: 'changed',
          firstValue: data1[key],
          secondValue: data2[key],
        };
      }
      return { name: key, type: 'unchanged', value: data1[key] };
    });
  return _.sortBy(result, 'name');
};

export default baildTree;
