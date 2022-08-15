// Move all exclamation marks to the end of the sentence
// Examples

// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

function remove (string) {
    let numOfMarks = [...string].filter(x=>x=="!").length
    return [...string].filter(x=>x!="!").join('') + "!".repeat(numOfMarks)
   }