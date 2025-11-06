// Ejercicio 9 - Formularios y Validación Simple

// Seleccionar los elementos
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let mensaje = document.getElementById("mensaje");

// Escuchar el evento submit del formulario
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  // Obtener los valores de los campos
  let valorNombre = nombre.value.trim();
  let valorCorreo = correo.value.trim();

  // Validar que no estén vacíos
  if (valorNombre === "" || valorCorreo === "") {
    mensaje.textContent = "Por favor completa todos los campos.";
    mensaje.className = "error";
  } else {
    mensaje.textContent = `Formulario enviado correctamente. ¡Bienvenido, ${valorNombre}!`;
    mensaje.className = "exito";

    // Limpiar los campos
    nombre.value = "";
    correo.value = "";
  }
});
