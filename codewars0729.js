// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.
// Task:

// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.
// Vowel Harmony Rules (simplified)

// When the last vowel in the word is

//     a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
//     a back vowel (a, á, o, ó, u, ú) the suffix is -nak

// Examples:

// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"

function dative(word) {
    let suffix = ""
    let nek = ['e', 'é', "i", 'í', 'ö', 'ő', 'ü', 'ű']
    let nak = ['a', 'á', 'o', 'ó', 'u', 'ú']
    for(let i = 0; i < word.length; i++){
      if (nek.includes(word[i])) suffix = "nek"
      if (nak.includes(word[i])) suffix = "nak"
    }
  return word + suffix
}
