const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.innerHTML = '&#128064;'; // Olho fechado
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.innerHTML = '&#128065;'; // Olho aberto
    }
});
