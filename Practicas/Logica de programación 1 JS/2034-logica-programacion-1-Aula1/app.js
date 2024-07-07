let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el número');
}else{
    alert('No acertaste intentalo de nuevo');
}

/*
// Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!"
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// Declara una variable llamada nombre y asígnale el valor "Luna"
var nombre = "Luna";

// Crea una variable llamada edad y asígnale el valor 25
var edad = 25;

// Establece una variable numeroDeVentas y asígnale el valor 50
var numeroDeVentas = 50;

// Establece una variable saldoDisponible y asígnale el valor 1000
var saldoDisponible = 1000;

// Muestra una alerta con el texto "¡Error! Completa todos los campos"
alert("¡Error! Completa todos los campos");

// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos"
var mensajeDeError = "¡Error! Completa todos los campos";

// Muestra una alerta con el valor de la variable mensajeDeError
alert(mensajeDeError);

// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre
nombre = prompt("¿Cuál es tu nombre?");

// Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad
edad = prompt("¿Cuál es tu edad?");

// Convierte la edad ingresada a un número
edad = parseInt(edad);

// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!"
if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}else{
    alert("¡No puedes obtener tu licencia de conducir!");
}
*/