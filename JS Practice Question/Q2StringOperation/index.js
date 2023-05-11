function countOccurrences(){
    var string = document.getElementById("inputString").value;
    var searchString = document.getElementById("searchString").value;
    var occurence = document.getElementById("occurence");
    const substrings = string.split(searchString);
    var count = substrings.length - 1;
    //console.log(count);

    occurence.value = count;
}

function replace(){
    var string = document.getElementById("inputString").value;
    var searchString = document.getElementById("searchString").value;
    var replaceString = document.getElementById("replaceString").value;
    var newString = document.getElementById("newString");

    let result = string.replaceAll(searchString, replaceString);
    console.log(result);
    newString.value = result;
}