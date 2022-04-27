// Hello, this is my first Kata so forgive me if it is of poor quality.

// In this Kata you should fix/create a program that returns the following values:

//     false/False if either a or b (or both) are not numbers
//     a % b plus b % a if both arguments are numbers

// You may assume the following:

//     If a and b are both numbers, neither of a or b will be 0.

function myFirstKata(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") {
    return false;
    }else{
     return (a % b) + (b % a);
    }
  }


//   A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example 2000, entered as an integer, will return as a string 2000 has 366 days

// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

// Also the basic rule for validating a leap year are as follows

// Most years that can be divided evenly by 4 are leap years.

// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.


function yearDays(year)
{
  let numOfDays = 365
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    numOfDays = 366
  }
  return `${year} has ${numOfDays} days`
}


// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
function fuelPrice(litres, pricePerLitre) {
    let discount = 0 
    for (let i = 2; i <= litres; i+=2){
      discount += 0.05
    }
    let answer = litres * (pricePerLitre - Math.min(discount, 0.25))
    return +answer.toFixed(2)
    }

    // For a pole vaulter, it is very important to begin the approach run at the best possible starting mark. This is affected by numerous factors and requires fine-tuning in practice. But there is a guideline that will help a beginning vaulter start at approximately the right location for the so-called "three-step approach," based on the vaulter's body height.

    // This guideline was taught to me in feet and inches, but due to the international nature of Codewars, I am creating this kata to use metric units instead.
    
    // You are given the following two guidelines to begin with: (1) A vaulter with a height of 1.52 meters should start at 9.45 meters on the runway. (2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.
    
    // You will receive a vaulter's height in meters (which will always lie in a range between a minimum of 1.22 meters and a maximum of 2.13 meters). Your job is to return the best starting mark in meters, rounded to two decimal places.
    
    // Hint: Based on the two guidelines given above, you will want to account for the change in starting mark per change in body height. This involves a linear relationship. But there is also a constant offset involved. If you can determine the rate of change described above, you should be able to determine that constant offset.
       

    // Create a function that takes a string and an integer (n).

    // The function should return a string that repeats the input string n number of times.
    
    // If anything other than a string is passed in you should return "Not a string"
    var repeatIt = function(str, n) {
        return typeof(str) != "string" ? "Not a string" : str.repeat(n);
        }   