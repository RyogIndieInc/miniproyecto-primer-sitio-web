// Primero, definimos la función (Arrow function)
const agregarHabilidades = () => {
    const misHabilidades = ["HTML", "CSS", "JS", "Git básico", "Github básico", "Resolución de problemas"];
    
    // El problema estaba aquí: ¡la variable 'listaHabilidades' no estaba definida!
    listaHabilidades.innerHTML = '';
    
    for (let i = 0; i < misHabilidades.length; i++) {
        const habilidad = misHabilidades[i];
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = habilidad;
        listaHabilidades.appendChild(nuevoLi);
    }
};

// Ahora, declaramos las variables que se usan en el script.
const botonSaludo = document.getElementById('btn-habilidades');
const listaHabilidades = document.querySelector('ul'); // <-- ¡Esta línea es la que faltaba!

// Y ahora el addEventListener funciona porque la función ya está definida
botonSaludo.addEventListener('click', agregarHabilidades);