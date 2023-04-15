let showPassword = document.getElementById("showPassword");
let inputPassword = document.getElementById("password");

showPassword.onclick = function () {
    if (inputPassword.type == "password") {
        inputPassword.type = "text";
        showPassword.classList.add("show");
    } else {
        inputPassword.type = "password";
        showPassword.classList.remove("show");
    }
};

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
