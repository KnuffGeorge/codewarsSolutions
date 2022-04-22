// The Task

//     Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
//     Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {
	const dictionary = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  }
  if(language in dictionary){
  return dictionary[language]
  }else{
  return dictionary.english
  }
}

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
    return array.map(x => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x)   
  }

//   ou are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

//   Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].
  
//   Space in the number of characters which do not increase time (i.e. all characters but those that increase time).
  
//   The moment of time is determined as follows:
  
//   If time is greater than space, then the moment is from the future. If time is less than space, then the moment is from the past. Otherwise, it is the present moment.
  
//   You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.
//   Examples
  
//   For moment = "01:00 pm", the output should be [true, false, false].
  
//   time equals 1, and space equals 7, so the moment is from the past.
  
//   For moment = "12:02 pm", the output should be [false, true, false].
  
//   time equals 5, and space equals 5, which means that it's a present moment.
  
//   For moment = "12:30 pm", the output should be [false, false, true].
  
//   time equals 6, space equals 5, so the moment is from the future.
//   Input/Output
  
//       [input] string moment
  
//   The moment of time and space that the input time came from.
  
//       [output] a boolean array
  
//   Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

function momentOfTimeInSpace(moment) {
    let momArr = moment.split('')
    let time = momArr.filter(el => !isNaN(el)).reduce((acc, el) => acc + +el, 0)
    let space = momArr.filter(el => isNaN(el) || el == " " || el == "0").length
    
    let answer = [false, false, false]
    if (space > time){
      answer[0] = true
    }else if (time > space){
      answer[2] = true
    }else{
      answer[1] = true
    }
    
    
    return answer
  }