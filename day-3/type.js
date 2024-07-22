// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/*
I:a random value
O:a boolean value 
C:
E:
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // Use Array.isArray() to check if the value is an array
    return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
/*
I:an random value
O:a boolean value 
C:
E:
*/
//look up how to figure out 
function isObject(value) {
    // YOUR CODE BELOW HERE //
     // Check if value is not null and is of type 'object'
     if (value !== null && typeof value === 'object') {
        // Ensure the value is not an array and not a date
        if (!Array.isArray(value) && !(value instanceof Date)) {
            return true;
        }
    }
    return false;

    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I:an random value
O:a boolean value 
C:
E:
*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
     // Check if value is not null and is of type 'object'
     if (value !== null && typeof value === 'object') {
        // Ensure the value is not an array and not a date
        if (!Array.isArray(value) && !(value instanceof Date)) {
            return true;
        }
    }
    return false;
}

function isCollection(value) {
    // Return true if the value is an array or an object intended as a collection
    return Array.isArray(value) || isObject(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
/*
I:a random value
O:a type of value  
C:
E:
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
     // Check for null
     if (value === null) {
        return "null";
    }

    // Check for arrays
    if (Array.isArray(value)) {
        return "array";
    }

    // Check for dates
    if (value instanceof Date) {
        return "date";
    }

    // Use typeof for other types
    let type = typeof value;
    if (type === "object") {
        return "object";
    }
    if (type === "string") {
        return "string";
    }
    if (type === "number") {
        return "number";
    }
    if (type === "boolean") {
        return "boolean";
    }
    if (type === "undefined") {
        return "undefined";
    }
    if (type === "function") {
        return "function";
    }

    // Default case (shouldn't reach here with provided types)
    return "unknown";
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}