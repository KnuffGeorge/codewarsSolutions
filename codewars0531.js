// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:

//     Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
//     If no letters are given, the function should return 'z'

// Examples:

// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

function addLetters(...letters) {
    let sum = letters.reduce((ac,x)=> x.charCodeAt(0) - 96 + ac, 0) 
    while (sum >= 27){
      sum -= 26
    }
    return sum ? String.fromCharCode(sum + 96) : 'z'
  }

 
//   You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

  function expandedForm(num) {
    let string = num.toString()
    let answer = ""
    for(let i = 0; i <= string.length; i++){
     if (+string[i] > 0){
       answer += string[i] * 10 ** (string.length - (i+1)) + " + "
  }
  } return answer.slice(0,-3)
  }  


//   Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    let cubed = arr.map(x=> x ** 3)
    if (cubed.includes(NaN)) {return undefined}
    return cubed.reduce((ac,el)=> Math.abs(el) % 2 === 1 ? ac + el : ac + 0 , 0);
    }

//     Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
  let sum = 0
  for (let i = 1; i<=n; i++){
    sum += i ** 3
  }return sum
}
// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.
// Input/Output

//     [input] integer array L ($a in PHP)

// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

//     [output] a boolean value

//     true if Arthur need to invite more women, false otherwise.



function inviteMoreWomen(L) {
  return L.reduce((ac,el)=>ac + el,0) > 0 
}