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

// Define el array de objetos con tus redes sociales
const redesSociales = [
    { nombre: "GitHub", url: "https://github.com/RyogIndieInc" },
    { nombre: "LinkedIn", url: "https://linkedin.com/in/ronnyolivares" },
    { nombre: "X(Twitter)", url: "https://x.com/RyogDev"}
];

// Función para crear enlaces dinámicos
const crearEnlacesSociales = () => {
  // Selecciona el footer
    const footer = document.querySelector('footer');

  // Borra el contenido actual del footer para evitar duplicados
    footer.innerHTML = '';

  // Recorre el array de redes sociales
    redesSociales.forEach(red => {
    const nuevoEnlace = document.createElement('a');
    nuevoEnlace.href = red.url;
    nuevoEnlace.textContent = red.nombre;

    // Añade el enlace al footer
    footer.appendChild(nuevoEnlace);
    });
};

// Llama a la función al cargar la página para que los enlaces aparezcan
crearEnlacesSociales();