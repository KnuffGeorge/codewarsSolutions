// n Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
    let arr = string.split('')
    console.log(arr[arr.length-1])
    while (arr[arr.length-1] == '!'){
      if (arr[arr.length-1] == '!'){
        arr.pop()
    }
    }
    return arr.join('')
    }

    