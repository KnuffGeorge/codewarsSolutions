// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".
// Task:

//     function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
//     function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.

// Examples:

// mean("London", data), 51.19(9999999999996) 
// variance("London", data), 57.42(833333333374)

// Notes:

//     if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

//     Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

//     Shell
//         Shell tests only variance.
//         In "function "variance" $1 is "data", $2 is "town".

//     A ref: http://www.mathsisfun.com/data/standard-deviation.html

//     data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com

const getRain = (town, strng) => strng.split(town)[1].split("\n")[0].split(",").map(x=>+x.split(" ")[1])
const checkName = (town,strng) => !strng.includes(town) || strng.split(town)[1].split("\n")[0].split(":")[0]

function mean(town, strng) {
if (checkName(town,strng)) return -1
return getRain(town,strng).reduce((ac,el)=> ac + el, 0)/12
}
function variance(town, strng) {
if (checkName(town,strng)) return -1
return getRain(town,strng).map(x=> (x - mean(town,strng)) ** 2).reduce((ac,el)=> ac + el, 0)/12
}

// Should be easy, begin by looking at the code. Debug the code and the functions should work.

// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

function multi(arr) {
    return arr.reduce((ac,el)=> ac * el,1);
  }
  function add(arr) {
    return arr.reduce((ac,el)=> ac + el,0);
  }
  function reverse(str) {
    return [...str].reverse().join('');
  }

//   You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

function sumConsecutives(s) {
    let sum = 0
    let answer = []
    for (let i = 0; i<s.length; i++){
      sum += s[i]
      if (s[i] !== s[i+1]){
        answer.push(sum)
        sum = 0
      } 
    }return answer
 }