// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
// Rules:

//     Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
//     Strings will consist of uppercase letters only
//     Only two groups to a fight.
//     Group whose total power (A + B + C + ...) is bigger wins.
//     If the powers are equal, it's a tie.

function battle(x, y) {
    let xScore = [...x].reduce((ac,el)=> el.charCodeAt() - 64 + ac, 0)
    let yScore = [...y].reduce((ac,el)=> el.charCodeAt() - 64 + ac, 0)
    return xScore > yScore ? x : xScore == yScore ? "Tie!" : y 
}

// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

function getMissingElement(superImportantArray){
    for (let i = 0; i < 10; i++) {
      if (!superImportantArray.includes(i)) return i;
    }
  }

//   Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

//   Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
  
//   Rules:
  
//   Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a){
    let vowels = "AEIOU"
    return a.split(' ').map(x=> x.toUpperCase() + '!!!!').join(' ').split('').map(x=> x== "A" ? "@" : vowels.includes(x) ? "*" : x).join("")
  }

//   Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

//   "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  
//   --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => s.split(' ').filter((el,ind,arr)=> el !== arr[ind-1]).join(' ') 

// The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.
  
function stantonMeasure(arr){
    let stanton = arr.filter(x=> x == 1).length
    return arr.filter(x=> x == stanton).length
  }

//   Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"

// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"

// If the string is less than 4 characters, return "Error: Name too short".

function nicknameGenerator(name){
    let vowels = "aeiou";
    if (name.length < 4) return "Error: Name too short"
    return (vowels.includes(name[2])) ? name.slice(0, 4) : name.slice(0, 3)
  }

//   You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

//   The array is unsorted.
  
//   An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.
  
//   You should return the duplicate value as a single integer.

function findDup( arr ){
    let sorted = arr.sort((a,b)=> a-b);
    return +sorted.filter((x,i,ar)=>  x == ar[i-1]).join('')   
   }
  