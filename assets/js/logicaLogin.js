const button = document.getElementById('button');

button.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() !== '' && password.trim() !== '') {
        window.location.href = '../../paginaPrincipal.html';

    } else {
        alert("Por favor ingresa usuario y contraseña");
    }
});