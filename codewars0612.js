// Task

// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
  }

//   Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// input: names - unsorted array
// output: sorted array
sortme = function( names ){
    return names.sort()
  }


//   The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases (input -> output):

// 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// 90, 100 --> []

// Enjoy it!!

function sumDigPow(a, b) {
    let answer = []
    while (a < b){
      if([...a.toString()].reduce((ac,el,ind) => ac + el ** (ind + 1),0) === a){
         answer.push(a)
         }
      a++
    }return answer
  }
