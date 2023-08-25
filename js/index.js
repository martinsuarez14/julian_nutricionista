// El siguiente texto sirve para agregar un saludo personalizado al usuario que ingresa a la página.

// 'document' se utiliza para referirnos al documento global HTML
// 'ddEventListener' se usa para "escuchar" eventos en la página.
// Espera 2 argumentos, un evento y una función a jecutar cuando suceda el evento.
// 'DOMContentLoaded' es un evento que se ejecuta cuando el contenido de la página cargó por completo.
// 'function()' se utiliza para declarar una función a ejecutarse
document.addEventListener("DOMContentLoaded", function() {
  // 'const' determina una variable con scope (alcance) global
  // 'nombre' identificador de una variable
  // '=' operador de asignación. 
  // 'prompt' función que abre una ventana en el navegador para que el usuario ingrese texto.
  const nombre = prompt("Por favor ingresa tu nombre!");

  // 'getElementById' busca en el HTML un elemento que tenga el id "saludo-inicial" y lo guarda
  // en la variable "navbarName"
  const navbarName = document.getElementById("saludo-inicial");
  // 'innerText' inyecta un texto en la variable "navbarName"
  navbarName.innerText = `Hola ${nombre}!`;
});


// El siguiente código es para controlar el texto que aparece y desaparece en la pantalla.

// Asignamos valores a las siguientes variables.
const texto = "¡Una vida más sana!";
const velocidadTipeo = 100; // Velocidad de escritura en milisegundos
const velocidadBorrado = 50; // Velocidad de borrado en milisegundos
const pausa = 1000; // Pausa entre escribir y borrar en milisegundos

const typewriter = document.getElementById("typewriter");

// declaramos una función bajo el nombre de "typeAndErase"
function typeAndErase(texto, velocidadTipeo, velocidadBorrado, pausa) {
  typewriter.innerHTML = ""; // Limpiar el contenido
  // 'setTimeout' función que se ejecuta luego de cierto tiempo. Espera 2 argumentos: el primero
  // es la función a ejecutarse, el segundo es el tiempo de espera para ejecutarse.
  setTimeout(() => {
    // 'let' se usa para definir una variable con scope local. Sólo existe dentro de la función que la crea.
    let i = 0;
    // 'setInterval' también espera 2 argumentos. El primero es una función y el segundo
    // es el tiempo cada cuanto volverá a ejecutarse la función del primer argumento.
    const typeInterval = setInterval(() => {
      // 'charAt()' se usa para obtener el valor de un caracter específico en una cadena de texto.
      typewriter.innerHTML += texto.charAt(i);
      i++;
      // 'if' palabra reservada para armar un condicional. Si la condición se cumple se ejecuta 
      // el código que está dentro, sino no.
      // '>' operador de comparación "mayor que"
      // 'length' método que devuelve la cantidad de caracteres que tiene el texto.
      if (i > texto.length) {
        // 'clearInterval' Se usa para que una función como setInterval deje de ejecutarse cada cierto tiempo.
        clearInterval(typeInterval);
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            const currentText = typewriter.innerHTML;
            // 'slice()' se usa para obtener una porción de texto.
            typewriter.innerHTML = currentText.slice(0, -1);
            if (currentText === "") {
              clearInterval(eraseInterval);
              setTimeout(() => {
                typeAndErase(texto, velocidadTipeo, velocidadBorrado, pausa);
              }, pausa);
            }
          }, velocidadBorrado);
        }, pausa);
      }
    }, velocidadTipeo);
  }, pausa);
}

// se llama a la función para que se ejecute.
typeAndErase(texto, velocidadTipeo, velocidadBorrado, pausa);

// El siguiente código controla un botón para volver al top de la página.

const scrollButton = document.getElementById("scrollButton");

// Mostrar u ocultar el botón según el desplazamiento
// 'window' se usa para capturar la pantalla del navegador
// 'scroll' evento de descender en la página.
window.addEventListener("scroll", function() {
  // 'window.scrollY > 300' indica la cantidad de pixeles que se desplaza.
  if (window.scrollY > 300) {
    // si se dezplaza más de 300 pixeles se cambia el estilo del botón para que se muestre
    scrollButton.style.display = "block";
  } else { // 'else' se usa como alternativa si la condición el "if" no se cumple
    // si el scroll es menor a 300 pixeles no se muestra el botón
    scrollButton.style.display = "none";
  }
});

// Volver arriba cuando se hace clic en el botón
scrollButton.addEventListener("click", function() {
  // 'scrollTo' volvemos al top de la pantalla pasandole 0 en los valores.
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Desplazamiento suave
  });
});
