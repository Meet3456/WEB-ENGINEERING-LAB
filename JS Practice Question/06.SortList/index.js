function sortList(){
    var input = document.getElementById("inputList").value;
    var result = document.getElementById("result");

    var numbers = input.split(",").map(Number);
    var numberArray = [];
    for (var i = 0; i < numbers.length; i++) {
        var number = Number(numbers[i]);
        if (!isNaN(number)) {
            numberArray.push(number);
        }
    }
    //numberArray.sort()

    //Bubble sort
    for (var i = 0; i < numberArray.length; i++) {
        for (var j = 0; j < numberArray.length - i - 1; j++) {
          if (numberArray[j] > numberArray[j + 1]) {
            var temp = numberArray[j];
            numberArray[j] = numberArray[j + 1];
            numberArray[j + 1] = temp;
          }
        }
      }
    result.value = "List after doubling the numbers: "+numberArray.join(", ");
}