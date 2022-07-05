// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.


function product(values) {
    return values && values.length > 0 ? values.reduce((ac,el)=> ac * el, 1) : null
   }

//    You've always loved both Fizz Buzz katas and cuckoo clocks, and when you walked by a garage sale and saw an ornate cuckoo clock with a missing pendulum, and a "Beyond-Ultimate Raspberry Pi Starter Kit" filled with all sorts of sensors and motors and other components, it's like you were suddenly hit by a beam of light and knew that it was your mission to combine the two to create a computerized Fizz Buzz cuckoo clock!

//    You took them home and set up shop on the kitchen table, getting more and more excited as you got everything working together just perfectly. Soon the only task remaining was to write a function to select from the sounds you had recorded depending on what time it was:
//    Your plan
   
//        When a minute is evenly divisible by three, the clock will say the word "Fizz".
//        When a minute is evenly divisible by five, the clock will say the word "Buzz".
//        When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:
//            On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
//            On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
//        With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.
   
//    Your input will be a string containing hour and minute values in 24-hour time, separated by a colon, and with leading zeros. For example, 1:34 pm would be "13:34".
   
//    Your return value will be a string containing the combination of Fizz, Buzz, Cuckoo, and/or tick sounds that the clock needs to make at that time, separated by spaces. Note that although the input is in 24-hour time, cuckoo clocks' cuckoos are in 12-hour time. 

function fizzBuzzCuckooClock(time) {
    let hour = +time.split(":")[0]
    let minute = +time.split(':')[1]
    if (hour > 12) hour -= 12
    if (hour == 0) hour += 12
    if (minute == 00) return "Cuckoo ".repeat(hour).slice(0,-1)
    else if (minute == 30) return "Cuckoo"
    else if (minute % 3 === 0 && minute % 5 === 0) return "Fizz Buzz"
    else if (minute % 3 === 0) return "Fizz"
    else if (minute % 5 === 0) return "Buzz"
    else return "tick"
  }

//   Task

//   Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
  
//   Note: There is no newline in the end (after the pattern ends)
//   Examples
  
//   pattern(3) should return "1\n1*2\n1**3", e.g. the following:
  
//   1
//   1*2
//   1**3

function pattern(n){
    let output = "1\n";
    for (let i = 2; i <= n; i++){
      output += "1" + "*".repeat(i - 1) + i + '\n'
    }
    return output.slice(0, -1);
  }