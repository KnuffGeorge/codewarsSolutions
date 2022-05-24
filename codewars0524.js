
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    return word.split('').map((x,i)=> x === x.toUpperCase() ? x = i : null).filter(x => x != null)
    };

//     Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    return +n.toString(2).split('').reduce((ac,el) => ac + +el, 0)
  };
