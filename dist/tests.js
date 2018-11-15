"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var content = new index_1.PublicArrayContent(['the', 'long', 'sentence', 'of', 'words', 'is', 'right', 'here']);
content.length = 2;
// Test 1:
if (arrays_match_1.arraysMatch(content.data, ['the', 'long']))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2:
if (content.length === 2)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3:
if (content.asString('---') === 'the---long')
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4:
if (content.notEmpty)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5:
if (content.has('long'))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6:
if (content.hasAny(['the', 'is']))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7:
if (!(content.hasAny(['?', 'is'])))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8:
if (content.hasAll(['long', 'the']))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9:
if (content.hasAdjacent(['the', 'long']))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10:
if (!(content.hasAdjacent(['long', 'the'])))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11:
if (content.allPass(function (item) { return typeof item === 'string'; }))
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12:
if (!(content.anyPass(function (item) { return item.length > 4; })))
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13:
if (content.anyPass(function (item) { return item.length > 3; }))
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
content.data = [1, 2, 3, 4, 66, 77, 88, 99, 100];
// Test 14:
if (!(content.startsWith([0, 1])))
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
// Test 15:
if (content.startsWith([1, 2, 3]))
    console.log('test 15 passed');
else
    console.log('test 15 FAILED');
// Test 16:
if (!(content.endsWith([99])))
    console.log('test 16 passed');
else
    console.log('test 16 FAILED');
// Test 17:
if (content.endsWith([99, 100]))
    console.log('test 17 passed');
else
    console.log('test 17 FAILED');
// Test 18:
if (!(content.matches([1, 2, 3, 4, 66, 77, 88, 99])))
    console.log('test 18 passed');
else
    console.log('test 18 FAILED');
// Test 19:
if (content.matches([1, 2, 3, 4, 66, 77, 88, 99, 100]))
    console.log('test 19 passed');
else
    console.log('test 19 FAILED');
// Test 20:
var result = content.indexesThatPass(function (item) {
    return (item % 2 !== 0 && item > 10);
});
if (arrays_match_1.arraysMatch(result, [5, 7]))
    console.log('test 20 passed');
else
    console.log('test 20 FAILED');
// Test 21:
result = content.indexesThatPass(function (item) {
    return (item % 2 !== 0 && item > 10);
});
if (arrays_match_1.arraysMatch(result, [5, 7]))
    console.log('test 21 passed');
else
    console.log('test 21 FAILED');
console.log(content.indexesThatPass(function (item) { return item > 1000; })); // []
console.log(content.firstIndexOf(100)); // 8
content.data = [1, 2, 3, 4, 66, 77, 88, 99, 100, 900, 300, 100];
console.log(content.lastIndexOf(100)); // 11
console.log(content.indexesOf(100)); // [8, 11]
