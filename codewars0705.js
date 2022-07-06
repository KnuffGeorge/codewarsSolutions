// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"

function noRepeat(str) {  
    return [...str].filter((x,i,arr)=> arr.indexOf(x) === arr.lastIndexOf(x))[0]
    
    }

    // *** No Loops Allowed ***

    // You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
    
    // You can assume all values in the array are numbers.
    
    // Do not use loops. Do not modify input array.

    function smallEnough(a, limit) {
        return a.every(x => x <= limit);
      }  