// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s,n){
    let exclamations = 0
    let filtered = ""
    for (let i = 0; i < s.length; i++){
        if (exclamations < n){
          s[i] == "!" ? exclamations ++ : filtered += s[i] 
        }else{
          filtered += s[i]
        }
    }return filtered
  }