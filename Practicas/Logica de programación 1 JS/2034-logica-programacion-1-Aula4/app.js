
//Variables
//Math.floor me ayuda a tener un numero que sea entero
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

/*
Caso de Alice
let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";

let palabraPersona = "";

if(cantidadPersonas == 1){
    palabraPersona = "persona";
}else{
    palabraPersona = "personas"
}
*/

//Desafios

/*
//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

let bienvenido = "¡Hola! ¿que tal?";
console.log(bienvenido);

*/

/*
//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Manuel";
let Mensajedebienvenida = "¡Hola! ¿que tal? "+nombre;
console.log(Mensajedebienvenida);

*/

/*
//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre = "Manuel";
alert("¡Hola! ¿Que tal?"+nombre)

*/

/*
//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta ");
console.log(respuesta);
*/

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
/*
var variable1 = parseInt(prompt("Ingrese el valor de variable 1: "));
var variable2 = parseInt(prompt("Ingrese el valor de variable 2: "));
var variable3 = variable1 + variable2;
console.log(variable3);
*/
/*
//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let Edadusuario = prompt("Ingrese su edad");
if (Edadusuario<18){
    console.log("Usted es menor de edad");
}else{
    console.log("Usted es mayor de edad");
}
*/

/*
//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = parseInt(prompt("Ingrese un número: "));
if (numero>0){
    console.log("El número es positivo");
}else if(numero<0){
    console.log("El número es negativo");
}else{
    console.log("El número es cero");
}
*/
/*
//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
*/
/*
//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = parseInt(prompt("Nota del alumno: "));
if (nota>=7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}
*/
/*
//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let aleatorio = Math.floor(Math.random()*1000);
console.log(aleatorio);
*/
/*
//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let aleatorio = Math.floor(Math.random()*10)+1;
console.log(aleatorio);
*/
/*
//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let aleatorio = Math.floor(Math.random()*1000)+1;
console.log(aleatorio);
*/

