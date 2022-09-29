// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


const orderedCount = function (text) {
    let obj = {}
    for (let letter of text){
      console.log(letter)
      if (letter in obj){
        obj[letter]++
      }else{
        obj[letter] = 1
      }
      
    }
    return Object.entries(obj).sort((a,b)=> text.indexOf(a[0]) - text.indexOf(b[0]))
  }