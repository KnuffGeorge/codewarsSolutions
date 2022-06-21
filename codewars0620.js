// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

function sortMyString(S) {
    let odd = '';
    let even = '';
    for (let i = 0; i < S.length; i++) {
      (i % 2 === 0) ? (even += S[i]) : (odd += S[i])
    }
    return `${even} ${odd}`
  }

//   Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.
//   Input:
  
//       Array of file sizes (0 <= s <= 100)
//       Capacity of the HD (0 <= c <= 500)
  
//   Output:
  
//       Number of files that can be fully saved in the HD.
  
function save(sizes, hd) {
    let sum=0
    for (let i = 0; i < sizes.length; i++) {
      sum += sizes[i];
      
      if (sum>hd)  return i        
    }
    return sizes.length 
    }

//     Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]

// Don't worry about bad input, you will always receive a finite list of integers.

var filterLucky=x=>{
    return x.filter(el => el.toString().includes('7'))
  }