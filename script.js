let botonSaludo = document.getElementById('btn-saludo');

function cambiarTextoBoton() {
    botonSaludo.innerText = '¡Hola! Bienvenido a mi página de presentación. Ahora soy un experto en HTML, CSS y JavaScript básico.';
}

botonSaludo.addEventListener('click', cambiarTextoBoton);