// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    return [...str].filter(x=> x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123).length
  }