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
