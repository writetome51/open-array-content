"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
var getFirstIndexOf_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOf");
var getLastIndexOf_1 = require("@writetome51/array-get-indexes-intermediate/getLastIndexOf");
var getIndexesOf_1 = require("@writetome51/array-get-indexes-intermediate/getIndexesOf");
var getIndexesThatPass_1 = require("@writetome51/array-get-indexes-intermediate/getIndexesThatPass");
var arrayHas_1 = require("@writetome51/array-has/arrayHas");
var arrayHasAll_1 = require("@writetome51/array-has/arrayHasAll");
var arrayHasAny_1 = require("@writetome51/array-has/arrayHasAny");
var arrayHasAdjacent_1 = require("@writetome51/array-has/arrayHasAdjacent");
var arrayStartsWith_1 = require("@writetome51/array-starts-with-ends-with/arrayStartsWith");
var arrayEndsWith_1 = require("@writetome51/array-starts-with-ends-with/arrayEndsWith");
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
var OpenArrayContent = /** @class */ (function (_super) {
    __extends(OpenArrayContent, _super);
    function OpenArrayContent(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    Object.defineProperty(OpenArrayContent.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        set: function (value) {
            this.data.length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenArrayContent.prototype, "isEmpty", {
        get: function () {
            return isEmpty_notEmpty_1.isEmpty(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenArrayContent.prototype, "notEmpty", {
        get: function () {
            return isEmpty_notEmpty_1.notEmpty(this.data);
        },
        enumerable: true,
        configurable: true
    });
    // Does same thing as Array.join()
    OpenArrayContent.prototype.asString = function (glue) {
        if (glue === void 0) { glue = ', '; }
        return this.data.join(glue);
    };
    // returns false if value is object.
    OpenArrayContent.prototype.has = function (value) {
        return arrayHas_1.arrayHas(value, this.data);
    };
    // returns false if values contains object.
    OpenArrayContent.prototype.hasAll = function (values) {
        return arrayHasAll_1.arrayHasAll(values, this.data);
    };
    OpenArrayContent.prototype.hasAny = function (values) {
        return arrayHasAny_1.arrayHasAny(values, this.data);
    };
    // returns false if values contains object.
    OpenArrayContent.prototype.hasAdjacent = function (values) {
        return arrayHasAdjacent_1.arrayHasAdjacent(values, this.data);
    };
    OpenArrayContent.prototype.startsWith = function (values) {
        return arrayStartsWith_1.arrayStartsWith(values, this.data);
    };
    OpenArrayContent.prototype.endsWith = function (values) {
        return arrayEndsWith_1.arrayEndsWith(values, this.data);
    };
    // returns false if array contains object.
    OpenArrayContent.prototype.matches = function (array) {
        return arraysMatch_1.arraysMatch(array, this.data);
    };
    // For the next 3 methods:
    // testFunction is a callback with same signature as callback passed to
    // array.filter().
    // testFunction(value) checks if value passes test. If yes, it returns true.
    OpenArrayContent.prototype.allPass = function (testFunction) {
        return this.data.every(testFunction); // returns true if all items pass test.
    };
    // returns true if only 1 value passes.
    OpenArrayContent.prototype.anyPass = function (testFunction) {
        return this.data.some(testFunction);
    };
    // returns all indexes of items that pass test.
    OpenArrayContent.prototype.indexesThatPass = function (testFunction) {
        return getIndexesThatPass_1.getIndexesThatPass(testFunction, this.data);
    };
    // Does not work if value is object.
    OpenArrayContent.prototype.firstIndexOf = function (value) {
        return getFirstIndexOf_1.getFirstIndexOf(value, this.data);
    };
    // Does not work if value is object.
    OpenArrayContent.prototype.lastIndexOf = function (value) {
        return getLastIndexOf_1.getLastIndexOf(value, this.data);
    };
    // Does not work if value is object.
    OpenArrayContent.prototype.indexesOf = function (value) {
        return getIndexesOf_1.getIndexesOf(value, this.data);
    };
    return OpenArrayContent;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayContent = OpenArrayContent;
