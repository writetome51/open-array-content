The OpenArrayContent class is a dependency of the OpenArray class  ( package:  @writetome51/open-array ).

OpenArrayContent has many of the basic properties and methods you need to understand the array's
contents, and they are all listed further below.

To instantiate, pass the actual array it will contain to its constructor:

let content = new OpenArrayContent( [item1, item2, item3,...] );

You can reset the array by accessing the classes 'data' property:

content.data = [1,2,3,4,...];

Here are all properties and methods defined in the class:


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


	// returns all indexes of items that pass test.
	indexesThatPass(testFunction): number[] {
		return getIndexesThatPass(testFunction, this.data);
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