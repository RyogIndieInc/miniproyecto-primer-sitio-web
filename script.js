let miNombre = "RyogDev"

function saludar() {
    alert("Hola, " + miNombre + "!");
}

let botonSaludo = document.getElementById('btn-saludo');
botonSaludo.addEventListener('click', saludar);