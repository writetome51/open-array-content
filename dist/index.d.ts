import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayContent extends PublicArrayContainer {
	constructor(data?: any[]);


	length: number;
	readonly isEmpty: boolean;
	readonly notEmpty: boolean;


	asString(glue?: string): string;


	has(value: any): boolean;


	hasAll(values: any[]): boolean;


	hasAny(values: any[]): boolean;


	hasAdjacent(values: any[]): boolean;


	startsWith(values: any[]): boolean;


	endsWith(values: any[]): boolean;


	matches(array: any[]): boolean;


	allPass(testFunction: (item: any, index?: any, array?: any) => boolean): boolean;


	anyPass(testFunction: (item: any, index?: any, array?: any) => boolean): boolean;


	indexesThatPass(testFunction: (item: any, index?: any, array?: any) => boolean): number[];


	firstIndexOf(value: any): number;


	lastIndexOf(value: any): number;


	indexesOf(value: any): number[];
}
