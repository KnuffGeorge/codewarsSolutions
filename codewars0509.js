// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

function stairsIn20(stairs){
    return stairs.map(x => x = x.reduce((ac, el) => ac + el)).reduce((ac, el) => ac + el) * 20
   }


   function howManydays(month){
    let days = 0 
      switch (month){
      case 4: case 6: case 9: case 11:
      days = 30
      break;
      case 2:
      days = 28
      break;
      default:
      days = 31
      break;
    
    }
    return days;
  }

//   Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

// little tips: Use default for most of the cases can reduce your work.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

  function howManydays(month){
    let days = 0;
    switch (month){
  
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
        
      case 2:
        days = 28;
        break;
        
      default:
        days = 31;
        break;
    }
    return days;
  }