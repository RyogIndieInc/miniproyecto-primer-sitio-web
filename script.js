// Selecionar el botón y el párrafo
let botonSaludo = document.getElementById('btn-saludo');
let parrafoDescripcion = document.getElementById('descripcion-perfil');

// Define la función que cambiará el texto del párrafo
function cambiarDescripcion() {
    parrafoDescripcion.textContent = 'Soy un estudiante autodidacta en el desarrollo web full-stack, programación de videojuegos y modelado 3D';
}

// Asignar el evento: cuando se haga clic en el botón, se ejecuta la función.
botonSaludo.addEventListener('click', cambiarDescripcion);