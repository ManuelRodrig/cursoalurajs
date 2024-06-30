
//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}


/*

Desafios
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
*/

/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}
*/

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
// Solicita un número al usuario
/*
let numero = prompt("Introduce un número:");

// Convierte el valor ingresado a un número entero
numero = parseInt(numero);

// Verifica que el valor ingresado sea un número válido
if (!isNaN(numero)) {
    // Inicializa el contador en 0
    let contador = 0;

    // Usa un bucle while para contar desde 0 hasta el número ingresado
    while (contador <= numero) {
        console.log(contador);
        contador++;
    }
} else {
    console.log("Por favor, introduce un número válido.");
}
*/
