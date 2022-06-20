const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const errorMessage = document.querySelector('.error-message');
const createButton = document.querySelector('.create-account-button')
let passwordsMatch = false;

confirmPassword.onkeyup = function () {
    if (password.value != confirmPassword.value && password.value != '') {
        errorDiv = document.createElement('div');
        errorMessage.innerHTML = '';
        errorDiv.innerHTML = '* Password doesn\'t match';
        errorDiv.setAttribute('style', 'color: red; font-family: Roboto;')
        errorMessage.appendChild(errorDiv);
        passwordsMatch = false;
    } else if (password.value == confirmPassword.value && password.value != '') {
        errorMessage.innerHTML = ''
        passwordsMatch = true;
    }
}

createButton.addEventListener('click', function (e) {
    if (passwordsMatch === false) {
        e.preventDefault();
    };
});