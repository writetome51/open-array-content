import { PublicArrayContent } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let content = new PublicArrayContent(['the', 'long', 'sentence', 'of', 'words', 'is', 'right', 'here']);

content.length = 2;

// Test 1:
if (arraysMatch(content.data, ['the', 'long'])) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 2:
if (content.length === 2) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 3:
if (content.asString('---') === 'the---long') console.log('test 3 passed');
else console.log('test 3 FAILED');

// Test 4:
if (content.notEmpty) console.log('test 4 passed');
else console.log('test 4 FAILED');

// Test 4A: make sure .copy property is instance of PublicArrayContent:
let copy = content.copy;
if (copy.className && copy.className === 'PublicArrayContent') console.log('test 4A passed');
else console.log('test 4A FAILED');

// Test 4B: make sure copy has matching .data property:
if (arraysMatch(content.data, copy.data)) console.log('test 4B passed');
else console.log('test 4B FAILED');

// Test 4C: make sure copy.data is not linked in memory to content.data:
copy.data.push('100000');
if (arraysMatch(content.data, copy.data)) console.log('test 4C FAILED'); // they should not match.
else console.log('test 4C passed');

// Test 5:
if (content.has('long')) console.log('test 5 passed');
else console.log('test 5 FAILED');

// Test 6:
if (content.hasAny(['the', 'is'])) console.log('test 6 passed');
else console.log('test 6 FAILED');

// Test 7:
if (!(content.hasAny(['?', 'is']))) console.log('test 7 passed');
else console.log('test 7 FAILED');

// Test 8:
if (content.hasAll(['long', 'the'])) console.log('test 8 passed');
else console.log('test 8 FAILED');

// Test 9:
if (content.hasAdjacent(['the', 'long'])) console.log('test 9 passed');
else console.log('test 9 FAILED');

// Test 10:
if (!(content.hasAdjacent(['long', 'the']))) console.log('test 10 passed');
else console.log('test 10 FAILED');

// Test 11:
if (content.allPass((item) => typeof item === 'string')) console.log('test 11 passed');
else console.log('test 11 FAILED');

// Test 12:
if (!(content.anyPass((item) => item.length > 4))) console.log('test 12 passed');
else console.log('test 12 FAILED');

// Test 13:
if (content.anyPass((item) => item.length > 3)) console.log('test 13 passed');
else console.log('test 13 FAILED');


content.data = [1, 2, 3, 4, 66, 77, 88, 99, 100];

// Test 14:
if (!(content.startsWith([0, 1]))) console.log('test 14 passed');
else console.log('test 14 FAILED');

// Test 15:
if (content.startsWith([1, 2, 3])) console.log('test 15 passed');
else console.log('test 15 FAILED');

// Test 16:
if (!(content.endsWith([99]))) console.log('test 16 passed');
else console.log('test 16 FAILED');

// Test 17:
if (content.endsWith([99, 100])) console.log('test 17 passed');
else console.log('test 17 FAILED');

// Test 18:
if (!(content.matches([1, 2, 3, 4, 66, 77, 88, 99]))) console.log('test 18 passed');
else console.log('test 18 FAILED');

// Test 19:
if (content.matches([1, 2, 3, 4, 66, 77, 88, 99, 100])) console.log('test 19 passed');
else console.log('test 19 FAILED');

// Test 20:
let result = content.indexesThatPass((item) => {
	return (item % 2 !== 0 && item > 10);
});
if (arraysMatch(result, [5, 7])) console.log('test 20 passed');
else console.log('test 20 FAILED');

// Test 21:
result = content.indexesThatPass((item) => item > 1000);
if (arraysMatch(result, [])) console.log('test 21 passed');
else console.log('test 21 FAILED');

// Test 22:
if (content.firstIndexOf(100) === 8) console.log('test 22 passed');
else console.log('test 22 FAILED');


content.data = [1, 2, 3, 4, 66, 77, 88, 99, 100, 900, 300, 100];


// Test 23:
if (content.lastIndexOf(100) === 11) console.log('test 23 passed');
else console.log('test 23 FAILED');

// Test 24:
result = content.indexesOf(100);
if (arraysMatch(result, [8, 11])) console.log('test 24 passed');
else console.log('test 24 FAILED');


// Test 25: make sure .append() works:
content.append(['blah', 'goo']);
if (content.data[content.data.length - 1] === 'goo' && content.data[content.data.length - 2] === 'blah')
	console.log('test 25 passed');
else console.log('test 25 FAILED');

// Test 26: make sure .prepend() works:
content.prepend(['ccc', 'ddd']);
if (content.data[0] === 'ccc' && content.data[1] === 'ddd') console.log('test 26 passed');
else console.log('test 26 FAILED');

// Test 27: make sure .forEach() lets you access the current item, its index, and entire array:
content.data = ['a', 'b', 'c', 'd'];
let allData = [];
content.forEach((item, index, theArr) => {
	allData.push([item, index, theArr]);
});
if (arraysMatch(
	allData,
	[
		['a', 0, ['a', 'b', 'c', 'd']], ['b', 1, ['a', 'b', 'c', 'd']],
		['c', 2, ['a', 'b', 'c', 'd']], ['d', 3, ['a', 'b', 'c', 'd']]
	]
)) console.log('test 27 passed');
else console.log('test 27 FAILED');

// Test 27A: make sure .forEach() allows you to change the values of each item:
content.forEach((item, index, theArr) => {
	theArr[index] = index;
});
if (arraysMatch(content.data, [0, 1, 2, 3])) console.log('test 27A passed');
else console.log('test 27A FAILED');

// Test 28: make sure .set() changes value of content.data without breaking memory reference:
let dataCopy = content.data;
content.set([6, 7, 8, 9]);
if (arraysMatch(content.data, [6, 7, 8, 9]) && arraysMatch(content.data, dataCopy))
	console.log('test 28 passed');
else console.log('test 28 FAILED');


// Test 29: make sure .moveByIndex() works:
// content.data is [1,2,3,4,5]
content.data = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]];
content.moveByIndex(-1, 1);
if (arraysMatch(
	content.data,
	[[0, 1], [8, 9], [2, 3], [4, 5], [6, 7]])
) console.log('test 29 passed');
else console.log('test 29 FAILED');

