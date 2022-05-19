function vowelIndices(word){
    let vowels = 'aeiouy'
    return word.toLowerCase().split('').map((x,i)=> vowels.includes(x) ? x = i + 1 : x = '').filter(x => x != '') 
  }