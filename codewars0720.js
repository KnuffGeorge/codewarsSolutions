// You have to extract a portion of the file name as follows:

//     Assume it will start with date represented as long number
//     Followed by an underscore
//     You'll have then a filename with an extension
//     it will always have an extra extension at the end

// Inputs:

// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2

// Outputs

// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar

// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName
          .split('_')
          .slice(1)
          .join('_')
          .split('.')
          .slice(0, -1)
          .join('.')
    }
}

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    let count = 0
    let cased = text.toLowerCase()
    let set = Array.from(new Set([...cased]))
    for (let i = 0; i < set.length; i++){
      if (cased.indexOf(set[i]) != cased.lastIndexOf(set[i])) count++
    }return count
}

//   A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...

// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

function stockList(listOfArt, listOfCat){
  
    const checkStock = (code) =>{
      return listOfArt.filter(x=> x.startsWith(code)).reduce((ac,el)=> ac + +el.split(" ")[1],0)
    }
    if (listOfCat.filter(x=>checkStock(x) > 0).length == 0) return ""  
    return listOfCat.map(x=> `(${x} : ${checkStock(x)})`).join(" - ")
  }