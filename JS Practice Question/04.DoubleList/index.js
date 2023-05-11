function double(){
    var input = document.getElementById("inputList").value;
    var result = document.getElementById("result");

    var numbers = input.split(",").map(Number);
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }
    result.value = "List after doubling the numbers: "+numbers.join(", ");
}