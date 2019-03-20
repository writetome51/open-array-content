import { append, prepend } from '@writetome51/array-append-prepend';
import { arrayHas, arrayHasAll, arrayHasAny, arrayHasAdjacent } from '@writetome51/array-has';
import { arraysMatch } from '@writetome51/arrays-match';
import { arrayStartsWith, arrayEndsWith } from '@writetome51/array-starts-with-ends-with';
import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';
import { getCopy } from '@writetome51/array-get-copy';
import { getFirstIndexOf, getLastIndexOf, getIndexesOf, getIndexesThatPass }
	from '@writetome51/array-get-indexes';
import { isEmpty, notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { setArray } from '@writetome51/set-array';


export class PublicArrayContent extends PublicArrayContainer {


	constructor(data = []) {
		super(data);
	}


	get length(): number {
		return this.data.length;
	}


	set length(value) {
		this.data.length = value;
	}


	get isEmpty(): boolean {
		return isEmpty(this.data);
	}


	get notEmpty(): boolean {
		return notEmpty(this.data);
	}


	// this.copy -- a copy of the instance, containing an independent copy of this.data that can be
	// manipulated separately.

	get copy(): this {
		let theCopy = Object.create(this);
		// make sure theCopy.data is an independent copy:
		theCopy.data = getCopy(this.data);
		return theCopy;
	}


	// Changes the value of this.data without breaking its memory reference.

	set(newArray): void {
		setArray(this.data, newArray);
	}


	append(values: any[]): this {
		return this._returnThis_after(append(values, this.data));
	}


	prepend(values: any[]): this {
		return this._returnThis_after(prepend(values, this.data));
	}


	moveByIndex(currentIndex, newIndex): this {
		return this._returnThis_after(moveByIndex(currentIndex, newIndex, this.data));
	}


	forEach(iterationFunction: (currentValue, currentIndex?, entireArray?) => any): void {
		for (let i = 0; i < this.data.length; ++i) {
			iterationFunction(this.data[i], i, this.data);
		}
	}


	// Does same thing as Array.join()

	asString(glue = ', '): string {
		return this.data.join(glue);
	}


	// For all the methods below, any parameter called 'value' cannot be an object,
	// and any parameter called 'values' cannot contain an object.
	// This does not include arrays.  Arrays are OK, as long as they don't contain objects.


	has(value: any): boolean {
		return arrayHas(value, this.data);
	}


	hasAll(values: any[]): boolean {
		return arrayHasAll(values, this.data);
	}


	// May error if values contains object. If it first finds a non-object value in values that is also
	// in this.data, it returns true. If it doesn't, and then finds a value in values that is object,
	// it errors.

	hasAny(values: any[]): boolean {
		return arrayHasAny(values, this.data);
	}


	hasAdjacent(values: any[]): boolean {
		return arrayHasAdjacent(values, this.data);
	}


	startsWith(values: any[]): boolean {
		return arrayStartsWith(values, this.data);
	}


	endsWith(values: any[]): boolean {
		return arrayEndsWith(values, this.data);
	}


	matches(values: any[]): boolean {
		return arraysMatch(values, this.data);
	}


	firstIndexOf(value: any): number {
		return getFirstIndexOf(value, this.data);
	}


	lastIndexOf(value: any): number {
		return getLastIndexOf(value, this.data);
	}


	indexesOf(value: any): number[] {
		return getIndexesOf(value, this.data);
	}


	// For the next 3 methods:

	// testFunction(item, index?, array?) checks if item passes test.
	// If yes, it returns true.

	// returns true if all items pass test.

	allPass(testFunction: (item: any, index?, array?) => boolean): boolean {
		errorIfNotFunction(testFunction);
		return this.data.every(testFunction);
	}


	// returns true if at least 1 item passes.

	anyPass(testFunction: (item: any, index?, array?) => boolean): boolean {
		errorIfNotFunction(testFunction);
		return this.data.some(testFunction);
	}


	indexesThatPass(testFunction: (item: any, index?, array?) => boolean): number[] {
		return getIndexesThatPass(testFunction, this.data);
	}


}
