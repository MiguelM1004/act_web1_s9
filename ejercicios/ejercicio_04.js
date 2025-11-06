// Ejercicio 4 - Cambiar Contenido de Elementos

// Seleccionar los elementos
let texto1 = document.getElementById("texto1");
let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("boton");

// Agregar evento al botón
boton.addEventListener("click", function() {
  // Cambiar el texto usando textContent
  texto1.textContent = "El texto fue cambiado exitosamente con textContent.";

  // Agregar contenido HTML usando innerHTML
  contenedor.innerHTML = `
    <h3>Contenido nuevo agregado con innerHTML</h3>
    <p>Este texto tiene <strong>negrita</strong> y <em>cursiva</em>.</p>
  `;

  // Cambiar el color del botón para mostrar que se hizo clic
  boton.style.backgroundColor = "#81c784";
  boton.style.color = "#fff";
  boton.style.border = "none";
  boton.style.padding = "8px 12px";
  boton.style.borderRadius = "6px";
});
