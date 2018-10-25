import { OpenArrayContent } from './OpenArrayContent';


let content = new OpenArrayContent(['the', 'long', 'sentence', 'of', 'words', 'is', 'right', 'here']);

content.length = 2;

console.log(content.data);
console.log(content.length); // 2
console.log(content.asString('---')); // the---long
console.log(content.notEmpty); // true
console.log(content.has('long')); // true
console.log(content.hasAny(['the', 'is'])); // true
console.log(content.hasAny(['?', 'is'])); // false
console.log(content.hasAll(['long', 'the'])); // true
console.log(content.hasAdjacent(['the', 'long'])); // true
console.log(content.allPass((item) => typeof item === 'string')); // true
console.log(content.anyPass((item) => item.length > 4)); // false
console.log(content.anyPass((item) => item.length > 3)); // true

content.data = [1, 2, 3, 4, 66, 77, 88, 99, 100];

console.log(content.startsWith([0, 1])); // false
console.log(content.startsWith([1, 2, 3])); // true
console.log(content.endsWith([99])); // false
console.log(content.endsWith([99, 100])); // true

console.log(content.matches([1, 2, 3, 4, 66, 77, 88, 99])); // false
console.log(content.matches([1, 2, 3, 4, 66, 77, 88, 99, 100])); // true
console.log(content.indexesThatPass((item) => {
	return (item % 2 !== 0 && item > 10);
})); // [5, 7]

console.log(content.indexesThatPass((item)=> item > 1000)); // []

console.log(content.firstIndexOf(100)); // 8

content.data = [1, 2, 3, 4, 66, 77, 88, 99, 100, 900, 300, 100];
console.log(content.lastIndexOf(100)); // 11
console.log(content.indexesOf(100)); // [8, 11]

