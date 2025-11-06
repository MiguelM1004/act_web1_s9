// Ejercicio 7 - Crear y Agregar Elementos

// Seleccionar los elementos
let boton = document.getElementById("boton");
let lista = document.getElementById("lista");

// Contador para los elementos de la lista
let contador = 1;

// Evento del botón
boton.addEventListener("click", function() {
  // Crear un nuevo elemento <li>
  let nuevoElemento = document.createElement("li");

  // Agregar texto al elemento
  nuevoElemento.textContent = `Elemento ${contador}`;

  // Agregar el nuevo elemento a la lista
  lista.appendChild(nuevoElemento);

  // Aumentar el contador para el siguiente elemento
  contador++;
});
