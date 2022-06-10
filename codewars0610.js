// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task

// Given a number, Find if it is Disarium or not . 

function disariumNumber(n){
    return n == [...n.toString()].reduce((ac,el,ind)=> ac + el ** (ind+1), 0) ? "Disarium !!" : "Not !!"
  }

//   Definition

// A Tidy number is a number whose digits are in non-decreasing order.
// Task

// Given a number, Find if it is Tidy or not . 

function tidyNumber(n){
    let numbArr = [...n.toString()]
    return numbArr.filter((x,i)=> x <= numbArr[i+1] || i === numbArr.length - 1).length === numbArr.length
  }