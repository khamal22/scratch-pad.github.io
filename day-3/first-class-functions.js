// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
        return value> base
    }
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
  return function(value){
    return value < base 
  }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
   
      // Ensure startsWith is a single character
      if (typeof startsWith !== 'string' || startsWith.length !== 1) {
        
    }

    // Convert the startsWith character to lower case
    const lowerStartsWith = startsWith.toLowerCase();

    // Return a function that tests if a string starts with the specified character
    return function(str) {
        if (typeof str !== 'string') {
            return false;
        }
        // Convert the string to lower case and check if it starts with the lower case character
        return str.toLowerCase().startsWith(lowerStartsWith);
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
       // Ensure endsWith is a single character
       if (typeof endsWith !== 'string' || endsWith.length !== 1) {
        
    }

    // Convert the endsWith character to lower case
    const lowerEndsWith = endsWith.toLowerCase();

    // Return a function that tests if a string ends with the specified character
    return function(str) {
        if (typeof str !== 'string') {
            return false;
        }
        // Convert the string to lower case and check if it ends with the lower case character
        return str.toLowerCase().endsWith(lowerEndsWith);
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        result.push(modify(strings[i]));
    }
    return result;
    
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
      // Use the every method to apply the test function to all strings in the array
      return strings.every(test);
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}