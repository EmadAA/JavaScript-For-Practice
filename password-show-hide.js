//password show and hide section

let pass = document.getElementById('password');
let passText = document.getElementById("passText");

function check(){
    if(pass.value == ''){
        alert("Please Enter a Password");
    }
    else{
        if(pass.type=="password"){
            pass.type ="text";
            passText.innerHTML = " Hide  ";
        }
        else{
            pass.type ="password";
            passText.innerHTML = " Show ";
        }
    }
} 