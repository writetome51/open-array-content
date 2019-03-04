# PublicArrayContent

An array-manipulating Typescript/Javascript class with properties and methods  
that give info about what is in the array.

## Constructor
```
constructor(data? = []) // 'data' becomes the array it contains.
```

You can reset the array by accessing the class `.data` property:
```
content.data = [1,2,3,4];
```  

## Properties
```
data : any[]  // the actual array
	
length : number // length of this.data

isEmpty : boolean (read-only)

notEmpty : boolean (read-only)

copy : this (read-only)
    // a copy of the instance, containing an independent copy of this.data 
    // that can be manipulated separately.

className : string (read-only)
```

## Methods
<details>
<summary>view methods</summary>


NOTICE:  For all the methods below, any parameter called `value` cannot be an object,   
and any parameter called `values` cannot contain an object.   
This does not include arrays. Arrays are OK, as long as they don't contain objects.

```
asString(glue = ', '): string
    // Does same thing as Array.join()

has(value): boolean
    // returns true if this.data contains `value`.

hasAll(values): boolean
    // returns true if this.data contains every value in `values`.

hasAny(values): boolean
    // returns true if this.data contains at least 1 value in `values`.

hasAdjacent(values): boolean
    // returns true if this.data contains exact sequence of `values`.
    // Example: if this.data is [10,1,2,3,11], then this.hasAdjacent([1,2,3]) 
    // returns true.

startsWith(values): boolean
    // returns true if this.data starts with exact sequence of `values`.
    // always returns false if `values` contains object.

endsWith(values): boolean
    // returns true if this.data ends with exact sequence of `values`.
    // always returns false if `values` contains object.

matches(values): boolean
    // returns true if this.data matches `values` exactly.
    
firstIndexOf(value): number
    // returns index of first instance of `value` found in this.data
    
lastIndexOf(value): number
    // returns index of last instance of `value` found in this.data
    
indexesOf(value): number[]
    // returns indexes of every instance of `value` found in this.data
```

For the next 3 methods:  
`testFunction` is a callback with same signature as callback passed to  
`Array.filter()` :  
`testFunction(item, index?, theArray?): boolean`  
If `item` passes a test, `testFunction` returns true.

```
allPass(testFunction): boolean
    // returns true if all items pass test.

anyPass(testFunction): boolean
    // returns true if at least 1 item passes.

indexesThatPass(testFunction): number[]
    // returns indexes of items that pass test.
``` 
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
``` 
protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```
</details>


## Inheritance Chain

PublicArrayContent<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/public-array-content

## Loading
```
// if using TypeScript:
import { PublicArrayContent } from '@writetome51/public-array-content';
// if using ES5 JavaScript:
var PublicArrayContent = 
    require('@writetome51/public-array-content').PublicArrayContent;
```


## License
[MIT](https://choosealicense.com/licenses/mit/)