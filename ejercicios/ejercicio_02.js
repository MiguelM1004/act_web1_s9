// Ejercicio 2 - Seleccionar Elementos por ID

// Seleccionar los elementos por su ID
let parrafo1 = document.getElementById("parrafo1");
let parrafo2 = document.getElementById("parrafo2");
let caja = document.getElementById("caja");

// Cambiar el texto de los párrafos
parrafo1.textContent = "El texto del primer párrafo ha sido cambiado con JavaScript.";
parrafo2.textContent = "También modifiqué el segundo párrafo usando getElementById().";

// Cambiar el color de fondo de la caja
caja.style.backgroundColor = "#a3d2ca";
caja.style.padding = "10px";
caja.style.borderRadius = "8px";
caja.style.color = "#000";
