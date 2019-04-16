"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var array_append_prepend_1 = require("@writetome51/array-append-prepend");
var array_has_1 = require("@writetome51/array-has");
var arrays_match_1 = require("@writetome51/arrays-match");
var array_starts_with_ends_with_1 = require("@writetome51/array-starts-with-ends-with");
var error_if_not_function_1 = require("error-if-not-function");
var error_if_not_integer_zero_or_greater_1 = require("error-if-not-integer-zero-or-greater");
var array_get_copy_1 = require("@writetome51/array-get-copy");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
var array_move_by_index_1 = require("@writetome51/array-move-by-index");
var public_array_container_1 = require("@writetome51/public-array-container");
var set_array_1 = require("@writetome51/set-array");
var PublicArrayContent = /** @class */ (function (_super) {
    __extends(PublicArrayContent, _super);
    function PublicArrayContent(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    Object.defineProperty(PublicArrayContent.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        set: function (value) {
            error_if_not_integer_zero_or_greater_1.errorIfNotIntegerZeroOrGreater(value);
            this.data.length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicArrayContent.prototype, "isEmpty", {
        get: function () {
            return is_empty_not_empty_1.isEmpty(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicArrayContent.prototype, "notEmpty", {
        get: function () {
            return is_empty_not_empty_1.notEmpty(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicArrayContent.prototype, "copy", {
        // this.copy -- a copy of the instance, containing an independent copy of this.data that can be
        // manipulated separately.
        get: function () {
            var theCopy = Object.create(this);
            // make sure theCopy.data is an independent copy:
            theCopy.data = array_get_copy_1.getCopy(this.data);
            return theCopy;
        },
        enumerable: true,
        configurable: true
    });
    // Changes the value of this.data without breaking its memory reference.
    PublicArrayContent.prototype.set = function (newArray) {
        set_array_1.setArray(this.data, newArray);
    };
    PublicArrayContent.prototype.append = function (values) {
        return this._returnThis_after(array_append_prepend_1.append(values, this.data));
    };
    PublicArrayContent.prototype.prepend = function (values) {
        return this._returnThis_after(array_append_prepend_1.prepend(values, this.data));
    };
    PublicArrayContent.prototype.moveByIndex = function (currentIndex, newIndex) {
        return this._returnThis_after(array_move_by_index_1.moveByIndex(currentIndex, newIndex, this.data));
    };
    PublicArrayContent.prototype.forEach = function (iterationFunction) {
        error_if_not_function_1.errorIfNotFunction(iterationFunction);
        for (var i = 0; i < this.data.length; ++i) {
            iterationFunction(this.data[i], i, this.data);
        }
    };
    // Does same thing as Array.join()
    PublicArrayContent.prototype.asString = function (glue) {
        if (glue === void 0) { glue = ', '; }
        return this.data.join(glue);
    };
    // For all the methods below, any parameter called 'value' cannot be an object,
    // and any parameter called 'values' cannot contain an object.
    // This does not include arrays.  Arrays are OK, as long as they don't contain objects.
    PublicArrayContent.prototype.has = function (value) {
        return array_has_1.arrayHas(value, this.data);
    };
    PublicArrayContent.prototype.hasAll = function (values) {
        return array_has_1.arrayHasAll(values, this.data);
    };
    // May error if values contains object. If it first finds a non-object value in values that is also
    // in this.data, it returns true. If it doesn't, and then finds a value in values that is object,
    // it errors.
    PublicArrayContent.prototype.hasAny = function (values) {
        return array_has_1.arrayHasAny(values, this.data);
    };
    PublicArrayContent.prototype.hasAdjacent = function (values) {
        return array_has_1.arrayHasAdjacent(values, this.data);
    };
    PublicArrayContent.prototype.startsWith = function (values) {
        return array_starts_with_ends_with_1.arrayStartsWith(values, this.data);
    };
    PublicArrayContent.prototype.endsWith = function (values) {
        return array_starts_with_ends_with_1.arrayEndsWith(values, this.data);
    };
    PublicArrayContent.prototype.matches = function (values) {
        return arrays_match_1.arraysMatch(values, this.data);
    };
    PublicArrayContent.prototype.firstIndexOf = function (value) {
        return array_get_indexes_1.getFirstIndexOf(value, this.data);
    };
    PublicArrayContent.prototype.lastIndexOf = function (value) {
        return array_get_indexes_1.getLastIndexOf(value, this.data);
    };
    PublicArrayContent.prototype.indexesOf = function (value) {
        return array_get_indexes_1.getIndexesOf(value, this.data);
    };
    // For the next 3 methods:
    // testFunction(item, index?, array?) checks if item passes test.
    // If yes, it returns true.
    // returns true if all items pass test.
    PublicArrayContent.prototype.allPass = function (testFunction) {
        error_if_not_function_1.errorIfNotFunction(testFunction);
        return this.data.every(testFunction);
    };
    // returns true if at least 1 item passes.
    PublicArrayContent.prototype.anyPass = function (testFunction) {
        error_if_not_function_1.errorIfNotFunction(testFunction);
        return this.data.some(testFunction);
    };
    PublicArrayContent.prototype.indexesThatPass = function (testFunction) {
        return array_get_indexes_1.getIndexesThatPass(testFunction, this.data);
    };
    return PublicArrayContent;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayContent = PublicArrayContent;
