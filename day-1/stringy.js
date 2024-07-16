// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/** 
 * I:the input is a string 
 * O: the output is the strings length(number) 
 * C:n/a
 * E:n/a
 */


function length(string) {
    // YOUR CODE BELOW HERE //
    //return the length of the string using .length method
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/** 
 * I:the input is a string 
 * O: the output is a modified string that forced to be lowercase
 * C:n/a
 * E:n/a
 */

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //create varible to hold modified string
    var result = string.toLowerCase()
    //use TolowerCase to modify string 

    //return result
    return result;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/** 
 * I:the input is a string 
 * O:the output is a string forced to be uppercased
 * C:n/a
 * E:n/a
 */

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //create varible to hold modified string
    var result = string.toUpperCase();
    //use toUpperCase to change string

    //return result
    return result;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/** 
 * I:the input is a string 
 * O:the output is a modified string thats dashed
 * C:n/a
 * E:n/a
 */

function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase().replace(/\s+/g, '-')
    //use .replace method to modify the string with the correct parameters
    //us toLowerCase to modify string
    //return the result  

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/** 
 * I:a string with a single character 
 * O:a boolean 
 * C: case sensitive 
 * E:
 */

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //find method to find specific value in string 
    return string.charAt(0).toLowerCase() === char.toLowerCase();
    // is equal to the provided character, also converted to lowercase
    //make sure toLowercase is compared equally 
    //check if the first character of the string, converted to lowercase,


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/** 
 * I:a string with a single chaaracter 
 * O:a boolean 
 * C:case sensentive 
 * E:
 */

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //create varible to hold the last character 
    const lastChar = string[string.length - 1].toLowerCase();
    //create varible to make sure character is lowercased
    const charLower = char.toLowerCase();
    // Convert both string's last character and char to lowercase

    //return compared values 
    return lastChar === charLower;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/** 
 * I:two strings 
 * O:the two strings concatenated together into one 
 * C:
 * E:
 */

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //figure out what operater is used to concat strings 
    return stringOne + stringTwo

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/** 
 * I: any number of strings 
 * O: all the string values combined 
 * C:
 * E:
 */

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //use join method to combine strings stored in args 
    return args.join('');
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/** 
 * I:two strings 
 * O:the longest string out of the two 
 * C:
 * E:
 */

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //create if statement using the .length property to determine how long each string is
    // return string one if its longer else return string string two
    if (stringOne.length >= stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/** 
 * I:two strings 
 * O: a number indicating the value of the aphabetical order of the string 
 * C:
 * E:
 */

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //create 3 if statement to compare strings 
    if (stringOne < stringTwo) {
        return 1;
    } else if (stringOne > stringTwo) {
        return -1
    } else {
        return 0
    }
    //return 1 if string one is less than string two 
    //return - 1 if stringone is greater than stringtwo 
    //return 0 if there equal 

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/** 
 * I:two strings 
 * O:a number indicating the value of the aphabetical order of the string 
 * C:
 * E:
 */

function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne < stringTwo) {
        return -1;
    } else if (stringOne > stringTwo) {
        return 1;
    } else {
        return 0;
    }
 //return -1 if string one is less than string two 
    //return 1 if stringone is greater than stringtwo 
    //return 0 if there equal 




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}