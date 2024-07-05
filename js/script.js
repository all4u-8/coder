document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('js/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            
            const messageDiv = document.getElementById('message');

            if (user) {
                messageDiv.style.color = '#c9ada7';
                messageDiv.textContent = '¡Inicio de sesión exitoso!';
                setTimeout(() => {
                    window.location.href = 'pagina/1.html'; // Redirigir a la página específica
                }, 1000); // Redirigir después de 1 segundo
            } else {
                messageDiv.style.color = 'red';
                messageDiv.textContent = 'Usuario o contraseña incorrectos';
            }
        })
        .catch(error => {
            document.getElementById('message').textContent = 'Error al cargar los datos de usuario';
        });
});
