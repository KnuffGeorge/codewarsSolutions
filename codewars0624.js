// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
    let sum = ""
    let str1 = num1.toString()
    let str2 = num2.toString()
    let maxLength = Math.max(str1.length,str2.length)
    let pad1 = str1.padStart(maxLength,"0")
    let pad2 = str2.padStart(maxLength,"0")
    for (let i = 0; i < maxLength; i++){
      sum += +pad1[i] + +pad2[i]
    }
   return +sum
 }