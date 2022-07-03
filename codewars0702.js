// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
// Rules:

//     Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
//     Strings will consist of uppercase letters only
//     Only two groups to a fight.
//     Group whose total power (A + B + C + ...) is bigger wins.
//     If the powers are equal, it's a tie.

function battle(x, y) {
    let xScore = [...x].reduce((ac,el)=> el.charCodeAt() - 64 + ac, 0)
    let yScore = [...y].reduce((ac,el)=> el.charCodeAt() - 64 + ac, 0)
    return xScore > yScore ? x : xScore == yScore ? "Tie!" : y 
}

// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

function getMissingElement(superImportantArray){
    for (let i = 0; i < 10; i++) {
      if (!superImportantArray.includes(i)) return i;
    }
  }