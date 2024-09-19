//---------------------------------MODO OSCURO Y BOTON---------------------------------------------------------
const toggle = document.getElementById('contenedor');
const body = document.body;

// Escucha el evento 'click' en el botón para cambiar entre modos
toggle.addEventListener('click', function() {
    
    toggle.classList.toggle('active');
    body.classList.toggle('darkmode');
   
});


//------------------------------MAQUINA DE ESCRIBIR TEXTO----------------------------------------------------------
const texto0 = 'Estudiante de 6° en ingenieria en sistemas participe en en una feria de proyectos de la universidad donde ayude con el frond-end de una pagina web llamada GasWeb. Estoy a dos años de terminar la carrera con la especialidad de IOT.';

const texto1 = 'Participe en la elaboración de frond-end y en la documentacion de una pagina web que busca ayudar a los usuarios a mostrar la gasolineria mas cercana a ellos y con las mejores calificaciones dadas por los mismos usuarios.';

function escribirTexto(texto, elementoID, velocidad) {
    let index = 0;
    const elemento = document.getElementById(elementoID);

    function escribir() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index); // Añade letra por letra
            index++;
            setTimeout(escribir, velocidad); // Controla la velocidad del efecto
        }
    }

    escribir(); // Inicia el proceso de escritura
}

// Ejecutar el efecto para ambos párrafos
window.addEventListener('load', () => {
    escribirTexto(texto0, 'texto0', 50);  // Efecto en el párrafo de Perfil
    setTimeout(() => {
        escribirTexto(texto1, 'texto1', 50);  // Efecto en el párrafo de Experiencia
    }, 3000);  // Espera 3 segundos antes de comenzar el segundo párrafo
});



//--------------------BARRAS DE HABILIDADES---------------------
// Función para animar las barras de progreso al hacer scroll
function animarBarras() {
    const barras = document.querySelectorAll('.barra');
    barras.forEach(barra => {
        const porcentaje = barra.getAttribute('data-porcentaje');
        barra.style.width = porcentaje; // Cambia el ancho de la barra
    });
}

// Función para comprobar si el usuario ha hecho scroll hasta la sección
function mostrarBarrasAlHacerScroll() {
    const seccionHabilidades = document.getElementById('habilidades');
    const posicion = seccionHabilidades.getBoundingClientRect().top;
    const alturaVentana = window.innerHeight;

    if (posicion < alturaVentana) {
        animarBarras(); // Si la sección está visible en la ventana, animar las barras
        window.removeEventListener('scroll', mostrarBarrasAlHacerScroll); // Evita que se vuelva a animar
    }
}

// Ejecuta la función al cargar la página y al hacer scroll
window.addEventListener('scroll', mostrarBarrasAlHacerScroll);
window.addEventListener('load', mostrarBarrasAlHacerScroll);

//-----------------------CARRUSEL---------------

// Selección de elementos
const carruselImagenes = document.querySelector('.carrusel-imagenes');
const slides = document.querySelectorAll('.carrusel-imagenes img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicadores = document.querySelectorAll('.indicadores button');

let indiceActual = 0;
const totalSlides = slides.length;

// Función para cambiar de imagen
function mostrarSlide(indice) {
    carruselImagenes.style.transform = `translateX(${-indice * 100}%)`;
    indicadores.forEach((indicador, i) => {
        indicador.classList.toggle('activo', i === indice);
    });
}

// Evento para el botón 'Siguiente'
nextBtn.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % totalSlides;
    mostrarSlide(indiceActual);
});

// Evento para el botón 'Anterior'
prevBtn.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + totalSlides) % totalSlides;
    mostrarSlide(indiceActual);
});

// Evento para los indicadores
indicadores.forEach((indicador, i) => {
    indicador.addEventListener('click', () => {
        indiceActual = i;
        mostrarSlide(indiceActual);
    });
});

