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

    //   Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

    //   Python, Javascript, Java, Ruby versions: return results in a list/array
      
    //   NOTICE:
      
    //       Do NOT worry about checking zeros or negative values.
    //       To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

    // Javascript: return multiples into an array
function multiples(s1,s2,s3){
    let arr = []
    let num = Math.min(s1,s2)
    while (num < s3){
      if (num % s1 === 0 && num % s2 === 0 && num < s3) arr.push(num)
      num += Math.min(s1,s2)
    }
    return arr;
  }
      