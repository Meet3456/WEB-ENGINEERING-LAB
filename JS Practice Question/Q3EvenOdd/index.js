function displayEven(){
    var input = document.getElementById("inputList").value;
    var result = document.getElementById("result");

    var numbers = input.split(",").map(Number);
    var even = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            even.push(numbers[i]);
        }
    }
    result.value = "Even Numbers: "+even.join(", ");
}
function displayOdd(){
    var input = document.getElementById("inputList").value;
    var result = document.getElementById("result");

    var numbers = input.split(",").map(Number);
    var odd = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            odd.push(numbers[i]);
        }
    }
    result.value = "Odd Numbers: "+odd.join(", ");
}