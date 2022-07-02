// In your class, you have started lessons about "arithmetic progression". Because you are also a programmer, you have decided to write a function.

// This function, arithmetic_sequence_sum(a, r, n), should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a), and a number of occurences of the given integer (r), based on the element's position within the sequence.

// For example:

// arithmetic_sequence_sum(2, 3, 5) should return 40:

function ArithmeticSequenceSum(a, r, n) {
    let sum = a
    for(let i = 1; i < n; i++){
      sum += (r * i) + a
    }return sum
  }