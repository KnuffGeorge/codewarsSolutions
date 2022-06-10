// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task

// Given a number, Find if it is Disarium or not . 

function disariumNumber(n){
    return n == [...n.toString()].reduce((ac,el,ind)=> ac + el ** (ind+1), 0) ? "Disarium !!" : "Not !!"
  }