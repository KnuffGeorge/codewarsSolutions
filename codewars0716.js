// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    return [...str].filter(x=> x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123).length
  }

//   Write a function that returns the number of occurrences of an element in an array.

Array.prototype.numberOfOccurrences = function(num) {
    return this.filter(x => x === num).length;
  }