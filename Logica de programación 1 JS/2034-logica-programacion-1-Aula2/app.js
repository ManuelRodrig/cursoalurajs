
//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    //Comillas invertidas dice que le vamos a mandar cadenas de texto.
    alert(`Acertaste, el número es: ${numeroUsuario}`);
    console.log(numeroUsuario);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}

/*
Desafios

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
//Decirme si un día de la semana es fin de semana o no.

let diasemana = ('lunes','martes','miercoles','jueves','viernes');
let findesemana = ('sabado','domingo');
let diasemanaescrito = prompt('Ingresa un día de la semana');
// Comparación
if (diasemanaescrito == findesemana){
     alert('Buen fin de semana');
}else{
    alert('Buena semana');
}
*/
/*
//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numerocomparado = prompt('Ingrese su numero: ');
//Comparación del numero
if (numerocomparado >0){
    alert('El numero es positivo');
} else if (numerocomparado <0){
    alert('El numero es negativo');
}else{
    alert('El numero es cero');
}
*/
/*
//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacion = 100;
if (puntuacion < 100){
    alert('Intentalo nuevamente para ganar');
}else{
    alert('¡Felicidades, has ganado!');
}

*/
/*
//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 200;
alert('Señor(a) su saldo es: '+ saldo);

*/

/*
//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt('Ingrese su nombre: ');
alert('Bienvenido '+ nombre);

*/
