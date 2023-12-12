document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    localStorage.setItem(username, password);

    alert('Registro exitoso');
});