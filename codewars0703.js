// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(text){
    let array = []
    for (let i = 0; i<text.length; i++){
      array.push(text.slice(i).toUpperCase() + text.slice(0,i).toUpperCase()) 
    }return array
  }