import stylishParse from "./stylishParse.js"

export default (tree, format) => {
    switch(format) {
        case 'stylish':
            return stylishParse(tree);
        default:
            return 111
    }
   
}