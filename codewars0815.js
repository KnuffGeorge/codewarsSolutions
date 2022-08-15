// Move all exclamation marks to the end of the sentence
// Examples

// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

function remove (string) {
    let numOfMarks = [...string].filter(x=>x=="!").length
    return [...string].filter(x=>x!="!").join('') + "!".repeat(numOfMarks)
   }

//    Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

//    There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.
   
//    Good Luck!\

function fourSeven(n){
    let values = {
      4: 7,
      7: 4
    }
    return values[n] || 0
  }