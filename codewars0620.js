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

//   Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

//   calculate(2,"+", 4); //Should return 6
//   calculate(6,"-", 1.5); //Should return 4.5
//   calculate(-4,"*", 8); //Should return -32
//   calculate(49,"/", -7); //Should return -7
//   calculate(8,"m", 2); //Should return null
//   calculate(4,"/",0) //should return null

function calculate(num1, operation, num2) {
    switch(operation){
        case "+": return num1 + num2; 
        case "-": return num1 - num2; 
        case "/": return num2 !== 0 ? num1 / num2 : null;
        case "*": return num1 * num2;
        }
    return null
    }
  