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

//   Our counter prototype is broken. Can you spot, what's wrong here?

function Counter(){
    this.value = 0;
  
  
  Counter.prototype.increase = function() {
    this.value++;
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset = function() {
    this.value = 0;
  }
  }