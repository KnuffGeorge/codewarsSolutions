function longestRepetition(s) {
    let longest = 0
    let count = 0
    let char = ""
    for (let i = 0; i < s.length; i++){
      if (s[i] == s[i-1]){
        count++
        }else{
          count = 1
        }
        if(count > longest){
          char = s[i]
          longest = count
        
      }
    }return [char, longest]
  }