function usernameValidation(){
    var username = document.getElementById("username").value;
    var usernameBox = document.getElementById("username");
    var usernameText = document.getElementById("usernameVal");

    if(username.length < 4 || username.length > 25){
        usernameText.innerHTML = "Username must be between 4 and 25 characters";
        usernameText.style.color = "red";
        usernameBox.style.borderColor = "red";
    }else{
        usernameText.innerHTML = "Your username is valid";
        usernameText.style.color = "green";
        usernameBox.style.borderColor = "green";
    }
}

function emailValidation(){
    var email = document.getElementById("email").value;
    var emailBox = document.getElementById("email");
    var emailText = document.getElementById("emailVal");
    var pattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        emailText.innerHTML = "Valid email address";
        emailText.style.color = "green";
        emailBox.style.borderColor = "green"
    }else{
        emailText.innerHTML = "Please enter a valid email address";
        emailText.style.color = "red";
        emailBox.style.borderColor = "red"
    }
}

function passwordValidation(){
    var password = document.getElementById("password").value;
    var passwordBox = document.getElementById("password");
    var passwordText = document.getElementById("passwordVal");
    var special = "!@#$%^&*", count=0;

    for (let i = 0; i<=password.length; i++){
        for(let j = 0; j<=special.length; j++){
            if(password[i] == special[j]){
                count += 1;
            }
        }
    }
    if(password.length < 8){
        passwordText.innerHTML = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, I number, and 1 special character";
        passwordText.style.color = "red";
        passwordBox.style.borderColor = "red";
    }else{
        if(count == 0){
            passwordText.innerHTML = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, I number, and 1 special character";
            passwordText.style.color = "red";
            passwordBox.style.borderColor = "red";
        }else{
            passwordText.innerHTML = "Password is valid";
            passwordText.style.color = "green";
            passwordBox.style.borderColor = "green";
        }
    }
}

function matchPassword(){
    var rePassword = document.getElementById("reEnterPassword").value;
    var rePasswordBox = document.getElementById("reEnterPassword");
    var rePasswordText = document.getElementById("reEnterPasswordVal");
    var ogPassword = document.getElementById("password").value;

    if(ogPassword !== rePassword) {
        rePasswordText.innerHTML = "Password not matching";
        rePasswordText.style.color  = "red";
        rePasswordBox.style.borderColor = "red";
    }
    else{
        rePasswordText.innerHTML = "Password  Matching"; 
        rePasswordText.style.color = "green";
        rePasswordBox.style.borderColor = "green";
    }
}