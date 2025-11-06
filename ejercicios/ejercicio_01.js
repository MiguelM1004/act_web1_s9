// Ejercicio 1 - Información Básica del Documento

// Obtener el título de la página y la URL actual
let tituloPagina = document.title;
let urlActual = document.URL;

// Seleccionar el div donde se mostrará la información
let divInfo = document.getElementById("info");

// Crear el contenido con la información obtenida
divInfo.innerHTML = `
  <p><strong>Título de la página:</strong> ${tituloPagina}</p>
  <p><strong>URL actual:</strong> ${urlActual}</p>
`;
