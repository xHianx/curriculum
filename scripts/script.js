// Alerta de confirmación al enviar el formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Gracias por ponerte en contacto. Revisaré tu mensaje y te responderé pronto.');
});

// Función para cambiar la imagen de perfil al hacer clic
document.getElementById('photo').addEventListener('click', function() {
    const currentSrc = this.src;
    const newSrc = 'https://placehold.co/200x200?text=Nueva+Imagen';
    this.src = currentSrc === newSrc ? 'https://placehold.co/200x200' : newSrc;
    this.alt = 'Foto de perfil actualizada';
});
