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