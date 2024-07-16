// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/**
 * I: a string 
 * O:a new string representing the value of the input string reversed 
 * C:
 * E:
 * 
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //create varible to store the reversed characters 
    var reversed = '';
    //loop through the input string backwards 
    //start from the last character and move backwards to the first character 
    for(var i = input.length -1; i>= 0; i--){
//concat each character to the varible created 'reversed string'
        reversed += input[i];
    }
    
    //return the whole reversed string 
    return reversed;
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}