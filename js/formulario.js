document.addEventListener("DOMContentLoaded", function () {
    const formularioHtml = document.getElementById("formulario");
    const respuestaDiv = document.getElementById("respuesta");

    


    formularioHtml.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // Crear un objeto con los datos del formulario
        const formData = {
            nombre,
            apellido,
            fechaNacimiento
        };

        // Enviar los datos al servidor en formato JSON
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar la respuesta del servidor en la página
            respuestaDiv.innerHTML = `<p>Respuesta del servidor:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });
    });
});