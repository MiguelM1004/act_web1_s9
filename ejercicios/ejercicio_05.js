// Ejercicio 5 - Modificar Atributos

// Seleccionar los elementos
let imagen = document.getElementById("imagen");
let enlace = document.getElementById("enlace");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");

// Agregar evento al botón
boton.addEventListener("click", function() {
  // Leer los atributos actuales
  let srcActual = imagen.getAttribute("src");
  let hrefActual = enlace.getAttribute("href");

  // Cambiar los atributos
  imagen.setAttribute("src", "https://via.placeholder.com/200x150/4caf50/ffffff?text=Nueva+Imagen");
  enlace.setAttribute("href", "https://www.wikipedia.org");
  enlace.textContent = "Ir a Wikipedia";

  // Mostrar los cambios realizados
  resultado.innerHTML = `
    <p><strong>Anterior src:</strong> ${srcActual}</p>
    <p><strong>Nuevo src:</strong> ${imagen.getAttribute("src")}</p>
    <p><strong>Anterior href:</strong> ${hrefActual}</p>
    <p><strong>Nuevo href:</strong> ${enlace.getAttribute("href")}</p>
  `;

  // Cambiar estilo del botón
  boton.style.backgroundColor = "#4caf50";
  boton.style.color = "#fff";
  boton.style.border = "none";
  boton.style.padding = "8px 12px";
  boton.style.borderRadius = "6px";
});
