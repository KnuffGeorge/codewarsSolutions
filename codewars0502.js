// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

function evil(n) {
    return n.toString(2).split('').reduce((ac, cu) => ac + +cu, 0) % 2 === 0 ? "It's Evil!" : "It's Odious!"
  }

 
//   Create a function that returns the CSV representation of a two-dimensional numeric array.

//   Example:
  
//   input:
//      [[ 0, 1, 2, 3, 4 ],
//       [ 10,11,12,13,14 ],
//       [ 20,21,22,23,24 ],
//       [ 30,31,32,33,34 ]] 
      
//   output:
//        '0,1,2,3,4\n'
//       +'10,11,12,13,14\n'
//       +'20,21,22,23,24\n'
//       +'30,31,32,33,34'
  
//   Array's length > 2.
  function toCsvText(array) {
    let csv = '' 
    array.forEach(x => csv += x + "\n")
    return csv.slice(0, -1)
  }

//   Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.
  
  function warnTheSheep(queue) {
    let wolfPosition = queue.lastIndexOf('wolf')
    return wolfPosition == queue.length-1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - wolfPosition - 1}! You are about to be eaten by a wolf!` 
    }