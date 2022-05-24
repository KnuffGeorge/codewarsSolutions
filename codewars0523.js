// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let set = new Set(numbers)
    for (let num of set){
      if (numbers.filter(x=> x === num).length === 1){
        return num
      }
    }
    }

    // The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

    // The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
    
    // If the score < 0, return 0.
    
    // For example:
    
    // checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
    // checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
    // checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
    // checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
    
    function checkExam(array1, array2) {
        let score = array2.map((x,i) => x === array1[i] ? 4 : !x ? 0 :-1).reduce((ac,el) => ac + el, 0)
        return Math.max(score, 0)
      }   