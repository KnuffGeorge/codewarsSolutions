// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value

// More examples in test cases.

// Good luck!

function solve(arr){
    let map = {}
    let set = Array.from(new Set(arr))
    set.forEach((x)=> map[x] = arr.filter(y=> y==x).length)
    return arr.sort((a,b)=> map[a]===map[b] ? a - b : map[b] - map[a])
  }