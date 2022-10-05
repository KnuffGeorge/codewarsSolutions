// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

class Human{
    constructor(name){
      this.name = name
      }
    }class Man extends Human{
    }class Woman extends Man{}
    
class God{
  static create(){
    return [new Man("Adam"), new Woman("Eve")]
  }
}


// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win){
    let miniWins = 0 // initialse variable for count of mini wins
    let wordLengths = ticket.map(x=> x[0].length) // make array of string lengths on each ticket
      for (let i = 0; i < ticket.length; i++){ // loop through each ticket
        for(let j = 0; j < wordLengths[i]; j++){ // loop through each character of the string on the current ticket using word lengths array
          if (ticket[i][0][j].charCodeAt() === ticket[i][1]) miniWins++ // if any charCode matches the number, increment mini-wins
      }
    }
    return miniWins >= win ? "Winner!" : "Loser!"  // if required threshold of mini-wins is met, return Winner, else Loser
  }
