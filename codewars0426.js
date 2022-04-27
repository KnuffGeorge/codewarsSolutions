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