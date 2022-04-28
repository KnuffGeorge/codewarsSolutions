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
//    Your task is to create a change machine.

//    The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".
   
//    The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.
   
//    This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.
   

   function changeMe(moneyIn){
    let currentVal = 0
    let change = ""
    let acceptedMoney = "£5, £2, £1, 50p, 20p, 10p"
    if (!acceptedMoney.includes(moneyIn)){
      return moneyIn
    }
    acceptedMoney.includes('£') ? currentVal = moneyIn[1] * 100 : currentVal = moneyIn[0] * 10
    console.log(moneyIn)
    console.log(currentVal)
    if (moneyIn == "20p"){
      return "10p 10p"
    }
      if (moneyIn == "50p"){
      return "20p 20p 10p"
    }
      while (currentVal > 0){
      if (currentVal >= 20){
      change += "20p "
      currentVal -= 20
     }else{
      change += "10p "
      currentVal -= 10
    }
  }
    return change.trim()
  }

//   In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength){
    let timePassed = today.getTime() - last.getTime()
    let daysPassed = timePassed / (1000*60*60*24)
    
    console.log(timePassed)
    console.log(cycleLength)
    
    if (daysPassed > cycleLength){
      return true
    }else{
      return false;
    }
    }

    // The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

    // [This is writen in pseudocode]
    // if(number is even) number = number / 2
    // if(number is odd) number = 3*number + 1
    
    // #Task
    
    // Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.
    
    // #Examples
    
    // hotpo(1) returns 0
    // (1 is already 1)
    
    // hotpo(5) returns 5
    // 5 -> 16 -> 8 -> 4 -> 2 -> 1
    
    // hotpo(6) returns 8
    // 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
    
    // hotpo(23) returns 15
    // 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

    var hotpo = function(n){
        let times = 0
        if(n == 0 || n == 1){
          return 0
       }while (n != 1){
          if (n % 2 == 0){
            n = n/2
            times++
       }else if (n % 2 != 0){
            n = n*3 + 1
            times++
        }
    }  return times
    }
    