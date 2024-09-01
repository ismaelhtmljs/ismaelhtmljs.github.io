// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el botón y el formulario por su id
    const btn = document.getElementById('submit-btn');
    const form = document.getElementById('opinion-form');

    // Añade un evento de clic al botón
    btn.addEventListener('click', () => {
        // Limpia el formulario
        form.reset();
    });
});
