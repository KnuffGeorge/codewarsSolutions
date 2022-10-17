// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

function nearestSq(n){
    let lowerSq = n
    let upperSq = n
    while (Math.sqrt(lowerSq) != parseInt(Math.sqrt(lowerSq))){
      lowerSq--
    }
    while (Math.sqrt(upperSq) != parseInt(Math.sqrt(upperSq))){
      upperSq++
    }
    return Math.abs(upperSq - n) < Math.abs(lowerSq - n) ? upperSq : lowerSq 
}