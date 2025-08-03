// Selecionar el botón y el párrafo
let botonSaludo = document.getElementById('btn-saludo');
let parrafoDescripcion = document.getElementById('descripcion-perfil');

// Define la función que cambiará el texto del párrafo
function cambiarDescripcion() {
    parrafoDescripcion.textContent = '¡Hola! Bienvenido a mi página de presentación. Ahora soy un experto en HTML, CSS y JavaScript básico.';
}

// Asignar el evento: cuando se haga clic en el botón, se ejecuta la función.
botonSaludo.addEventListener('click', cambiarDescripcion);