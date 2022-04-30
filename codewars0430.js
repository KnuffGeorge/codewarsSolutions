// Write a function that calculates the original product price, without VAT.
// Example

// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

//     VAT is always 15% for the purposes of this Kata.
//     Round the result to 2 decimal places.
//     If null value given then return -1

function excludingVatPrice(price){
  return price ? Math.round((price - ((price / 1.15) - price) * -1) * 100) / 100 : price === 0 ? 0 : -1
}

// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

//     If the user tries to guess more than the limit, the function should throw an error.
//     If the user guess is right it should return true.
//     If the user guess is wrong it should return false and lose a life.

// Can you finish the game so all the rules are met?

class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      
      if (this.lives === 0){
         throw 'already dead'
      }else if (n === this.number){
         return true
      }else{
         this.lives--
         return false
          
      }
  }  
}
      

    //   Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

    //   Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
      
    //   Create a function which translates a given DNA string into RNA.
      
    //   For example:
      
    //   "GCAT"  =>  "GCAU"
      
    //   The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

    function DNAtoRNA(dna) {
        return dna.split('').map(x => x === "T" ? x = "U" : x = x).join('') 
       }