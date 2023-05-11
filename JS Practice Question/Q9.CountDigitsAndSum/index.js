function countDigitsAndSum(num) {
    var sum = 0;
    var numString = num.toString();
    var numDigits = numString.length;
    for (var i = 0; i < numDigits; i++) {
      sum += parseInt(numString.charAt(i));
    }
    return {
      digits: numDigits,
      sum: sum
    };
  }
  
  console.log(countDigitsAndSum(234123));