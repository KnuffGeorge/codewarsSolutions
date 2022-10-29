// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


String.prototype.digit = function(str) {
    return this.length > 0 && this.length < 2 && !isNaN(+this) && this != " " 
  };