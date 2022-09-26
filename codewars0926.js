// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//     the array can't be empty
//     only non-negative, single digit integers are allowed

// Return nil (or your language's equivalent) for invalid inputs.
// Examples

// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr){
    if(!arr.every(x=> !isNaN(+x) && x >= 0 && x < 10) || arr.length == 0) return null
    let num = +arr.join('')
    if(isNaN(+num)) return null
    if (arr[arr.length - 1] == 9){
      arr[arr.length - 1] = 0
      arr[arr.length - 2] += 1
    if (arr[arr.length - 2] == 10){
      arr[arr.length - 3] +=1
      arr[arr.length - 2] = 0
    }if (arr[0] == 10){
      arr[0] = 0
      arr.unshift(1)
    }
    }else{
      arr[arr.length-1] += 1
    }
    return arr
     
  }
