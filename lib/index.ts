import { isEmpty, notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';
import { arraysMatch } from '@writetome51/arrays-match';
import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic';
import { getLastIndexOf, getIndexesOf, getIndexesThatPass }
	from '@writetome51/array-get-indexes-intermediate';
import { arrayHas, arrayHasAll, arrayHasAny, arrayHasAdjacent } from '@writetome51/array-has';
import { arrayStartsWith, arrayEndsWith } from '@writetome51/array-starts-with-ends-with';
import { PublicArrayContainer } from '@writetome51/public-array-container';


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


	// Does same thing as Array.join()
	asString(glue = ', ') {
		return this.data.join(glue);
	}


	// returns false if value is object.
	has(value: any): boolean {
		return arrayHas(value, this.data);
	}


	// returns false if values contains object.
	hasAll(values: any[]): boolean {
		return arrayHasAll(values, this.data);
	}


	hasAny(values: any[]): boolean {
		return arrayHasAny(values, this.data);
	}


	// returns false if values contains object.
	hasAdjacent(values: any[]): boolean {
		return arrayHasAdjacent(values, this.data);
	}


	startsWith(values: any[]): boolean {
		return arrayStartsWith(values, this.data);
	}


	endsWith(values: any[]): boolean {
		return arrayEndsWith(values, this.data);
	}


	// returns false if array contains object.
	matches(array): boolean {
		return arraysMatch(array, this.data);
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


	// Does not work if value is object.
	firstIndexOf(value: any): number {
		return getFirstIndexOf(value, this.data);
	}


	// Does not work if value is object.
	lastIndexOf(value: any): number {
		return getLastIndexOf(value, this.data);
	}


	// Does not work if value is object.
	indexesOf(value: any): number[] {
		return getIndexesOf(value, this.data);
	}


}
