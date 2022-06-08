// Task

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)
// Examples

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
    let answer = []
    for (let lang in results)
      if(results[lang] >= 60){
        answer.push(lang)
      }
    return answer.sort((a,b)=> results[b] - results[a])
  
  }


//   Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

//   The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    let xDivs = []
    if (x === 1 || y === 1){
      return 1
    }
    for(let i = 0; i <= x/2; i++){
      x % i === 0 ? xDivs.push(i) : null
    }
    return xDivs.reverse().find(el=> y % el === 0)
  }
  