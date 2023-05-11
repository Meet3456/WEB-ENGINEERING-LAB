function validation(){
    var form = document.getElementById("form");
    var username    = document.getElementById("username").value;
    var username2    = document.getElementById("username");
    var text = document.getElementById("text");

    if (username.length <3 ){
        text.innerHTML = "Username must be between 3 and 25 characters";
        text.style.color = "red";
        username2.style.borderColor = "red"
        // username.input.style.border.color = "red"
    }
    else{
        text.innerHTML = "Your username is valid";
        text.style.color = "green"
        username2.style.borderColor = "green"
    }
    if (username.length >25 ){
        text.innerHTML = "Username must be between 3 and 25 characters";
        text.style.color = "red";
        username2.style.borderColor = "red"

        // username.input.style.border.color = "red"
    }
}

function validationemail(){
    var form = document.getElementById("form");
    var email1 = document.getElementById("email");
    var email = document.getElementById("email").value;
    var text2 = document.getElementById("text2");
    var pattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        text2.innerHTML = "your email is valid";
        text2.style.color = "green";
        email1.style.borderColor = "green"
    }
    else{
        text2.innerHTML = "your email is not valid";
        text2.style.color = "red";
        email1.style.borderColor = "red"
    }
}

function validationpass(){
    var form = document.getElementById("form");
    var password = document.getElementById("password").value;
    var pbox = document.getElementById("password");
    var arr = "!@#$%^&*"
    var text3 = document.getElementById("text3");
    var count = 0;
    
    for (let i = 0; i<=password.length; i++){
        for(let j = 0; j<=arr.length; j++){
            if(password[i] == arr[j]){
                count = count + 1;
            }
        }
    }
    
    if(password.length < 8){
        text3.innerHTML = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, I number, and 1 special character";
        text3.style.color = "red";
        pbox.style.borderColor = "red";
    }
    else if(password.length > 8){
        if (count = 0){
            text3.innerHTML = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, I number, and 1 special character";
        text3.style.color = "red";
        pbox.style.borderColor = "red";
        }

        else{
            text3.innerHTML = "Password is valid";
            text3.style.color = "green";
            pbox.style.borderColor = "green";
        }
    }
}

function matchpassword(){
    var form = document.getElementById("form");
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var pbox2 = document.getElementById("password2");
    var count = 0;
    for (let i = 1; i<=password1.length; i++){
        for(let j = 1; j<=password2.length; j++){
            if(password[i] == password2[j]){
                count = count + 1;
            }
        }
    }

    if( count = parseInt(password.length)){
        text4.innerHTML = "Password not matching";
        text4.style.color  = "red";
        pbox2.style.borderColor = "red"
    }
    else{
        text4.innerHTML = "Password  Matching"; 
        text4.style.color = "green";
        pbox2.style.borderColor = "green"; 
    }
}