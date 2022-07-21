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
