// <!-- Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34
//  -->

function twoDecimalPlaces(n) {
    return +n.toFixed(2)
  }

//   Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

//   Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
  
//   And then sort array in descending order.
  
//   Finally, use the separator ">" to connect the elements into a string.
  
//   Don't complain about the situation like 1>1 is not reasonable, it is just a separator.
  
//   Some example:
  
//   bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
//   bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
//   bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
  
function bigToSmall(arr){
    return [].concat(...arr).sort((a, b) => b-a).join(">")
     
   }
