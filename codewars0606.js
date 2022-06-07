// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
    return stringarray.map(x => +x)
  }

//   Input/Output

//   [input] integer upSpeed

//   A positive integer representing the daily growth.

//   Constraints: 5 ≤ upSpeed ≤ 100.

//   [input] integer downSpeed

//   A positive integer representing the nightly decline.

//   Constraints: 2 ≤ downSpeed < upSpeed.

//   [input] integer desiredHeight

//   A positive integer representing the threshold.

//   Constraints: 4 ≤ desiredHeight ≤ 1000.

//   [output] an integer

//   The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count).

 
  function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let plantSize = 0
    let days = 0
    while (plantSize <= desiredHeight){
      days++
      plantSize += upSpeed
      if(plantSize >= desiredHeight){
        return days
      }
      plantSize -= downSpeed
    }
    return days  
  }