// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"

// or printed:

// I
//  I
//   I

// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

function drawStairs(n) {
    let space = ""
    let stairs = ""
    for (let i = 1; i < n; i++){
      stairs += space + "I\n"
      space += " "
    }return stairs + space + "I"
  }

//   You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

//     If the input is 'H', return 'Hello World!'
//     If the input is 'Q', return the input
//     If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

function HQ9(code) {
    let ninetyNine = ""
    for (let i = 99; i > 1; i--){
      if (i > 2){ninetyNine += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`}
      else if (i == 2){ninetyNine += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`}
    } 
    if (code == "H"){
      return "Hello World!"
    }else if (code == "Q"){
      return code
    }else if (code == '9'){
      return ninetyNine + "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
    }
  }
git  