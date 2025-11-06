// Ejercicio 10 - Navegación entre Elementos

// Seleccionamos el elemento "medio"
let elementoMedio = document.getElementById("medio");
let boton = document.getElementById("navegarBtn");
let info = document.getElementById("info");

boton.addEventListener("click", () => {
  // Acceso al elemento padre
  let padre = elementoMedio.parentElement;

  // Acceso a los elementos hijos del contenedor
  let hijos = padre.children;

  // Acceso al siguiente hermano
  let siguiente = elementoMedio.nextElementSibling;

  // Construimos el mensaje con la información
  let mensaje = `
    <strong>Elemento actual:</strong> ${elementoMedio.textContent}<br>
    <strong>Padre:</strong> ${padre.className}<br>
    <strong>Total de hijos del padre:</strong> ${hijos.length}<br>
    <strong>Siguiente hermano:</strong> ${siguiente ? siguiente.textContent : "No hay siguiente"}
  `;

  // Mostramos el resultado en pantalla
  info.innerHTML = mensaje;
});
