import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayContent extends PublicArrayContainer {

	length: number;
	readonly isEmpty: boolean;
	readonly notEmpty: boolean;
	readonly copy: this;


	set(newArray: any[]): void;


	append(values: any[]): this;


	prepend(values: any[]): this;


	moveByIndex(currentIndex: number, newIndex: number): this;


	forEach(iterationFunction: (currentValue: any, currentIndex?: number, entireArray?: any[]) => any): void;


	asString(glue?: string): string;


	has(value: any): boolean;


	hasAll(values: any[]): boolean;


	hasAny(values: any[]): boolean;


	hasAdjacent(values: any[]): boolean;


	startsWith(values: any[]): boolean;


	endsWith(values: any[]): boolean;


	matches(values: any[]): boolean;


	firstIndexOf(value: any): number;


	lastIndexOf(value: any): number;


	indexesOf(value: any): number[];


	allPass(testFunction: (item: any, index?: number, array?: any[]) => boolean): boolean;


	anyPass(testFunction: (item: any, index?: number, array?: any[]) => boolean): boolean;


	indexesThatPass(testFunction: (item: any, index?: number, array?: any[]) => boolean): number[];
}
