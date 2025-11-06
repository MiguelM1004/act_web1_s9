// Ejercicio 8 - Eventos Básicos

// Seleccionar los elementos
let caja = document.getElementById("caja");
let boton = document.getElementById("boton");

// Evento click en el botón
boton.addEventListener("click", function() {
  caja.style.backgroundColor = "#81c784";
  caja.textContent = "¡Hiciste clic!";
});

// Evento mouseover (cuando el mouse pasa por encima)
caja.addEventListener("mouseover", function() {
  caja.style.backgroundColor = "#ffb74d";
  caja.textContent = "Mouse sobre la caja";
});

// Evento mouseout (cuando el mouse sale de la caja)
caja.addEventListener("mouseout", function() {
  caja.style.backgroundColor = "#90caf9";
  caja.textContent = "Pasa el mouse o haz clic";
});
