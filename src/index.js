import baildTree from "./baildTree.js";
import fs from 'fs';
import _ from "lodash";
import getParsing from "./parsing/getParsing.js";
export default (filepath1, filepath2, format = 'stylish') => {
const a = JSON.parse(fs.readFileSync(filepath1,'utf-8'));
const b = JSON.parse(fs.readFileSync(filepath2,'utf-8'));

const tree = baildTree(a,b);
return getParsing(tree, format);
}