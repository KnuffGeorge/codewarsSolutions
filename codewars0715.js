// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

function lostSheep(friday,saturday,total){
    return total - (friday.reduce((ac,el) =>ac+el,0) + saturday.reduce((ac,el)=>ac+el,0))
  }

//   Write a function

//   tripledouble(num1,num2)
  
//   which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
  
//   If this isn't the case, return 0

function tripledouble(num1, num2) {
    for(let i = 0; i<=9; i++){
      let num = i + ""
      if (num1.toString().includes(num.repeat(3)) && (num2.toString().includes(num.repeat(2)))){
        return 1
      }
    }return 0
  }