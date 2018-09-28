import { arraysMatch } from 'intuitive-array-handlers/no_modify/return_boolean/arraysMatch';
import { getFirstIndexOf } from 'intuitive-array-handlers/no_modify/get/indexes/getFirstIndexOf';
import { isEmpty, notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { arrayEndsWith } from 'intuitive-array-handlers/no_modify/return_boolean/arrayEndsWith';
import { arrayHas } from 'intuitive-array-handlers/no_modify/return_boolean/arrayHas';
import { arrayHasAll } from 'intuitive-array-handlers/no_modify/return_boolean/arrayHasAll';
import { arrayHasAny } from 'intuitive-array-handlers/no_modify/return_boolean/arrayHasAny';
import { arrayStartsWith } from 'intuitive-array-handlers/no_modify/return_boolean/arrayStartsWith';
import { getLastIndexOf } from 'intuitive-array-handlers/no_modify/get/indexes/getLastIndexOf';
import { getIndexesOf } from 'intuitive-array-handlers/no_modify/get/indexes/getIndexesOf';
import { OpenArrayContainer } from './OpenArrayContainer';


export class OpenArrayContent extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	get length(): number {
		return this.data.length;
	}


	get isEmpty(): boolean {
		return isEmpty(this.data);
	}


	get notEmpty(): boolean {
		return notEmpty(this.data);
	}


	// returns false if value is object.
	has(value): boolean {
		return arrayHas(value, this.data);
	}


	// returns false if values contains object.
	hasAll(values: any[]): boolean {
		return arrayHasAll(values, this.data);
	}


	hasAny(values: any[]): boolean {
		return arrayHasAny(values, this.data);
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


	// For the next two methods:
	// testFunction is a callback with same signature as callback passed to
	// array.filter().
	// testFunction(value) checks if value passes test. If yes, it returns true.

	allPass(testFunction): boolean {
		return this.data.every(testFunction); // returns true if all items pass test.
	}


	// returns true if only 1 value passes.
	anyPass(testFunction): boolean {
		return this.data.some(testFunction);
	}


	// Does not work if value is object.
	firstIndexOf(value): number {
		return getFirstIndexOf(value, this.data);
	}


	// Does not work if value is object.
	lastIndexOf(value): number {
		return getLastIndexOf(value, this.data);
	}


	// Does not work if value is object.
	indexesOf(value): number[] {
		return getIndexesOf(value, this.data);
	}


}
