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
/*
I: function takes in a string
O: return the number representing the input string
C:n/a
E:n/a
*/



function length(string) {
    // YOUR CODE BELOW HERE //

    //return the string property of the input string 
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I: a string 
O:a new string forced to lowercase 
C:
E:
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I:a string 
O: a string thats forced to be uppercased
C:
E:
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toUpperCase()


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

/*
I:an input string 
O:a new string forced to dash cased 
C:
E:
*/


function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase().replace(/\s/g, '-')


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



/*
I:a string and a single character 
O: A boolean determining if the 
C:
E:
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    if (string[0].toLowerCase() === char.toLowerCase()) {
        return true;
    } else if (string[0].toLowerCase() !== char.toLowerCase()) {
        return false
    }

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
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    if (string[string.length - 1].toLowerCase() === char.toLowerCase()) {
        return true;
    } else if (string[string.length - 1].toLowerCase() !== char.toLowerCase()) {
        return false
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */


/*
I:two strings 
O:return the strings concatenated together 
C:
E:
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
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

/*
I:any number of strings 
O:all the stings joined together 
C:
E:
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

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
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) {
        return stringOne
    }
    else if (stringTwo.length > stringOne.length) {
        return stringTwo
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

/*
I:stringOne and stringTwo
O: 1, -1, 0
C:
E:
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne > stringTwo) {
        return -1;
    } else if (stringOne < stringTwo) {
        return 1;
    } else if (stringOne === stringTwo) {

        return 0;
    }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne > stringTwo) {
        return 1;
    } else if (stringOne < stringTwo) {
        return -1;
    } else if (stringOne === stringTwo) {

        return 0;
    }



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