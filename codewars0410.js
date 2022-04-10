// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation){
    return employed == true && vacation == false ? true : false
    }

// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

// Notes:

//     The output should be a string.
//     The coefficient and exponent is always a positive integer.

// Examples

//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"

function integrate(coefficient, exponent) {
    let newExp = exponent + 1
    return `${coefficient/newExp}x^${newExp}`
  } 

//   Complete the function which returns the weekday according to the input number:

//     1 returns "Sunday"
//     2 returns "Monday"
//     3 returns "Tuesday"
//     4 returns "Wednesday"
//     5 returns "Thursday"
//     6 returns "Friday"
//     7 returns "Saturday"
//     Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
    let dayMap = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    }
    
    return dayMap[num] ? dayMap[num] : "Wrong, please enter a number between 1 and 7"
    
    }

    // Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

    // Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
    
    function whoIsPaying(name){
      return name.length > 2 ? [name, name.slice(0,2)] : [name]
      }

