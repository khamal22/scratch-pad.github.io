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


/*
I: takes in a single string
O:returns a string that is the reversed version of the input string
C:you cannot use a method to solve this problem 
E:
*/
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //create a varible to hold result
    var result = ''; 
    //loop through input string
    for(var i = input.length - 1; i >= 0; i--){
      //add current letter to output
      result += input[i]
    }
    
    

    return result;
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