// Ejercicio 3 - Seleccionar Elementos por Clase

// Seleccionar todos los elementos con la clase "texto"
let elementosTexto = document.getElementsByClassName("texto");

// Cambiar el estilo de todos los elementos con esa clase
for (let i = 0; i < elementosTexto.length; i++) {
  elementosTexto[i].style.backgroundColor = "#e0f7fa";
  elementosTexto[i].style.padding = "8px";
  elementosTexto[i].style.borderRadius = "5px";
  elementosTexto[i].style.marginBottom = "5px";
}

// Contar cuántos elementos tienen esa clase
let cantidad = elementosTexto.length;

// Mostrar el resultado en pantalla
let resultado = document.getElementById("resultado");
resultado.innerHTML = `<p><strong>Cantidad de elementos con la clase "texto":</strong> ${cantidad}</p>`;
