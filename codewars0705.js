// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"

function noRepeat(str) {  
    return [...str].filter((x,i,arr)=> arr.indexOf(x) === arr.lastIndexOf(x))[0]
    
    }