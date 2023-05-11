function oddishOrEvenish(num) {
  var sum = 0;
  var digits = num.toString().split('');
  for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  console.log("Sum of digits: "+sum);
  if (sum % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

console.log(oddishOrEvenish(4321231));