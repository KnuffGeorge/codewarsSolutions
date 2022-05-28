// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {
    return  [...x].filter(x => x === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead';
  }

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules

//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Good luck and enjoy!

function wave(str){
    let arr = [...str].map((x,i) => str.slice(i,i+1) == ' ' ? null : str.slice(0,i).toLowerCase() + str.slice(i,i+1).toUpperCase() + str.slice(i+1).toLowerCase())
    return arr.filter(x=>x !== null) 
  }