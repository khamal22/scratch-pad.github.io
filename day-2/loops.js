// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/*
I:an array 
O:the values stored in the array 
C:use a console.log
E:
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //create for loop 
  for(var i = 0; i < array.length; i++){
    console.log(array[i])
  }
  //call it with console.log 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I:an array 
O:the values stored in the array 
C:use a console.log
E:
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //create for loop with a decreasing value
    for(var i = array.length - 1; i >= 0 ; i--){
      console.log(array[i])
    }
  //call it with console.log
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
I:an object 
O:an array with the objects keys 
C:
E:

*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // use for in loop to access object 
  //find method to see object keys 
  for( var key in object){
    return Object.keys(object);
  }
  //use console.log to return the objects array 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I:an object 
O:the keys of the object 
C:use a console.log
E:

*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //use for in loop to loop object
  for( var key in object){
    console.log(key);
  }
  //use console.log to print result 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I:an object 
O:an array with the object values 
C:
E:

*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //loop through object 
  for( var key in object ){
    return Object.values(object);
  }
  //find method to atain object values as array 
  //return an array with objects keys inside 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I:an object 
O:the values of the object 
C:use a console.log 
E:

*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //create loop 
  for(var key in object){
    //create if statement to see if object has its own property 
    if(object.hasOwnProperty(key)){
      console.log(object[key])
    }
  }
  // find method to get object values 
  //use a console.log 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I:object
O:the number of key value pairs stored within the object
C:
E:

*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
   // Initialize a counter to keep track of the number of key/value pairs
   let count = 0;

   // Iterate over the keys of the object
   for (var key in object) {
     // Increment the counter for each key found
     count++;
   }
 
   // Return the final count
   return count;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I:an object 
O:the printed object in reverse 
C:
E:

*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // Gather all the keys of the object in an array
  const keys = Object.keys(object);

  // Reverse the array of keys
  const reversedKeys = keys.reverse();

  // Iterate over the reversed array of keys and print the values
  for (let i = 0; i < reversedKeys.length; i++) {
    console.log(object[reversedKeys[i]]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}