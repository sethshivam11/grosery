let signup = document.getElementById('signup-btn');
let phone = document.getElementById('new-phone');
let password = document.getElementById('old-password');
let confirmPassword = document.getElementById('confirm-password');
let icon = document.getElementById('icon-div');
let login = document.getElementById('login-btn');
let form = document.getElementById('main-form');
let email = document.getElementById('mail');
function signupcheck(n) {
    loginsubmit = n;
    return;
}
function logincheck(n) {
    signupsubmit = n;
    return;
}
signup.addEventListener("click" , e=>{
    e.preventDefault();
    logincheck(true);
    icon.style.display = 'none';
    phone.style.display = 'block';
    confirmPassword.style.display = 'block';
    signup.style.display = 'none';
    login.style.display = 'block';
    password.value = '';
    email.value = '';
    signupcheck(false);
});
login.addEventListener("click", e => {
    e.preventDefault();
    signupcheck(true);
    icon.style.display = 'block';
    phone.style.display = 'none';
    confirmPassword.style.display = 'none';
    signup.style.display = 'block';
    login.style.display = 'none';
    password.value = '';
    email.value = '';
    logincheck(false);
});
let loginsubmit = true;
let signupsubmit = false;
form.addEventListener("submit", e =>{
    e.preventDefault();  
    if (signupsubmit == false && loginsubmit == true) {
        // console.log("login");
        // console.log('form submit');
        form.submit();
    }
    else if (loginsubmit == false && signupsubmit == true) {
        // console.log("signup");
        if (password.value == confirmPassword.value) {
            form.submit();
            console.log('passwords match and form submit');
        }
        else {
            alert("Passwords did not match!");
        }
    }
});

