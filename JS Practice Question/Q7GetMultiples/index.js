function getMultiples(number, length) {
    var multiples = [];
    for (var i = 1; multiples.length < length; i++) {
      multiples.push(number * i);
    }
    return multiples;
}

console.log(getMultiples(10,5));
console.log(getMultiples(2,10));
console.log(getMultiples(87,5));