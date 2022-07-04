// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(text){
    let array = []
    for (let i = 0; i<text.length; i++){
      array.push(text.slice(i).toUpperCase() + text.slice(0,i).toUpperCase()) 
    }return array
  }

//   You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

//   Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.
  
//   Between each number should be a space and after the final number (n) should be the word 'liftoff!'

function liftoff(instructions){
    return instructions.sort((a, b) => b - a).join(' ') + ' liftoff!';
  }