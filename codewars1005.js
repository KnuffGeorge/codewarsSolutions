// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
    const checkChars = (str) => str ? str.length === [...str].filter(x=> (x.charCodeAt() >= 64 && x.charCodeAt() <= 91) || (x.charCodeAt() >= 97 && x.charCodeAt() <= 122)).length : false
    const charCodeSum = (str) => checkChars(str) ? str.toUpperCase().split('').reduce((ac,el,index) => ac + el.charCodeAt(), 0) : 0
    return charCodeSum(s1) === charCodeSum(s2)
    }