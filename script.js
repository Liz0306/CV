//---------------------------------MODO OSCURO Y BOTON---------------------------------------------------------
const toggle = document.getElementById('contenedor');
const body = document.body;

// Escucha el evento 'click' en el botón para cambiar entre modos
toggle.addEventListener('click', function() {
    
    toggle.classList.toggle('active');
    body.classList.toggle('darkmode');
   
});


//------------------------------MAQUINA DE ESCRIBIR TEXTO----------------------------------------------------------
const texto = 'Estudiante de 6° en ingenieria en sistemas participe en en una feria de proyectos de la universidad donde ayude con el frond-end de una pagina web llamada GasWeb. Estoy a dos años de terminar la carrera con la especialidad de IOT';
        
// Seleccionamos el contenedor donde se mostrará el texto
const elementoTexto = document.getElementById('texto');

// Inicializamos variables
let index = 0; // Índice para recorrer el texto

// Función que va agregando una letra a la vez
function escribirTexto() {
    if (index < texto.length) {
        elementoTexto.innerHTML += texto.charAt(index); // Agrega una letra del texto
        index++; // Incrementa el índice
        setTimeout(escribirTexto, 25); // Llama a la función de nuevo después de 100 ms
    }
}

// Llama a la función de escritura cuando se carga la página
setTimeout(escribirTexto, 25);


