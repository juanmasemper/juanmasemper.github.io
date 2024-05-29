document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message); // Mensaje de éxito
        } else {
            alert(data.message); // Mensaje de error detallado
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el mensaje');
    });
});