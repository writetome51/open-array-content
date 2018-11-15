To include in your project:

    import { PublicArrayContent } from '@writetome51/public-array-content';


PublicArrayContent has many of the basic properties and methods you need to   
understand an array's contents, and they are all listed further below.

To instantiate, pass the actual array it will contain to its constructor:

    let content = new PublicArrayContent( [item1, item2, item3,...] );

You can reset the array by accessing the class 'data' property:

    content.data = [1,2,3,4,...];

Here are all properties defined in the class:
	
    length : number (read-writable)

	isEmpty : boolean (read-only)

	notEmpty : boolean (read-only)


Here are all methods defined in the class:

	// Does same thing as Array.join()
	asString(glue = ', '): string


	// returns false if value is object.
	has(value): boolean
	

	// returns false if values contains object.
	hasAll(values: any[]): boolean
	

	hasAny(values: any[]): boolean


	// returns false if values contains object.
	hasAdjacent(values: any[]): boolean


  	// returns false if values contains object.
	startsWith(values: any[]): boolean


 	// returns false if values contains object.
	endsWith(values: any[]): boolean


	// returns false if array contains object.
	matches(array): boolean


	// For the next 3 methods:
	// testFunction is a callback with same signature as callback passed to
	// Array.filter() :
	// testFunction(value, index?, theArray?):  checks if value passes test. If yes, it returns true.


  	// returns true if all items pass test.
	allPass(testFunction): boolean


	// returns true if only 1 value passes.
	anyPass(testFunction): boolean


	// returns all indexes of items that pass test.
	indexesThatPass(testFunction): number[]


	// Does not work if value is object.
	firstIndexOf(value): number


	// Does not work if value is object.
	lastIndexOf(value): number


	// Does not work if value is object.
	indexesOf(value): number[]

