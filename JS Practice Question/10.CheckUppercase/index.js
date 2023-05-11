function isFirstCharUppercase(str) {
    if (!str || !str.charAt(0).match(/[A-Za-z]/)) {
      console.log("Input string does not start with a character");
    }
    else if(str.charAt(0) === str.charAt(0).toUpperCase()){
        console.log("First Character is Uppercase");
    }else{
        console.log("First Character is Lowercase");
    }
  }
  isFirstCharUppercase("Vineet");
  isFirstCharUppercase("vineet");
  isFirstCharUppercase("2004Vineet");