
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.


function alphabetWar(fight){
    let left = {
     'w': 4,   
     'p': 3,
     'b': 2,
     's': 1,
    } 
    let right = {
     'm': 4,   
     'q': 3,
     'd': 2,
     'z': 1,
    } 
    let rightPower = 0
    let leftPower = 0
    for (let i = 0; i < fight.length; i++){
      if (fight[i] in left){
        leftPower += left[fight[i]]  
      }if (fight[i] in right){
        rightPower += right[fight[i]]  
      }  
    }  
    return leftPower === rightPower ? "Let's fight again!" : leftPower < rightPower ? "Right side wins!" : "Left side wins!"
    }

    
    // My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

    // In honor of my grandfather's memory we will write a function using his formula!
    
    //     Take a list of ages when each of your great-grandparent died.
    //     Multiply each number by itself.
    //     Add them all together.
    //     Take the square root of the result.
    //     Divide by two.
    
    // Example
    
    // predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
    
    // Note: the result should be rounded down to the nearest integer.

    function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
        return Math.floor(Math.sqrt([...arguments].reduce((ac,el) => ac + (el * el), 0)) / 2)
      }