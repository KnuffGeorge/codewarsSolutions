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

//   A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

function checkTheBucket(bucket){
    return bucket.includes("gold" || "Gold") ? true : false
   }