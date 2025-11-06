// Ejercicio 6 - Agregar y Quitar Clases CSS

// Seleccionar elementos
let texto = document.getElementById("texto");
let btnAgregar = document.getElementById("agregar");
let btnQuitar = document.getElementById("quitar");
let btnAlternar = document.getElementById("alternar");

// Agregar clase
btnAgregar.addEventListener("click", function() {
  texto.classList.add("resaltado");
  btnAgregar.classList.add("activo");
  btnQuitar.classList.remove("activo");
  btnAlternar.classList.remove("activo");
});

// Quitar clase
btnQuitar.addEventListener("click", function() {
  texto.classList.remove("resaltado");
  btnQuitar.classList.add("activo");
  btnAgregar.classList.remove("activo");
  btnAlternar.classList.remove("activo");
});

// Alternar clase
btnAlternar.addEventListener("click", function() {
  texto.classList.toggle("oculto");
  btnAlternar.classList.add("activo");
  btnAgregar.classList.remove("activo");
  btnQuitar.classList.remove("activo");
});
