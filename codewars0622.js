// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

//     Array can be empty or contain only one value; in this case return 0
//     If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
//     Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

// Examples

// [1, 2, 5, 6, 5, 2]  -->  2

// ...because there are 2 pairs: 2 and 5

// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

// ...because there are 4 pairs: 2, 20, 6 and 2 (again)

function duplicates(array){
    let pairs = 0
  let set = Array.from(new Set(array))
  set.forEach(x=> pairs += Math.floor(array.filter(y=> y===x).length / 2))
    return pairs
  }

//   Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
    let numbers = a.filter(x=> x !== x.toString()).sort((a,b)=>a-b)
    let letters = a.filter(x=> x === x.toString()).sort()
    return numbers.concat(letters)
    }

    Description:

// Count the number of exclamation marks and question marks, return the product.

function product (string) {
    return [...string].reduce((ac,el)=> el ==="?" ? ac + 1: ac,0) * [...string].reduce((ac,el)=> el ==="!" ? ac + 1: ac,0)
  }