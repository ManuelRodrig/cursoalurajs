let nombre = "Manuel";
let resultado = multiplicarPorDos(9);
let resultado2 = promedioDetres(9, 5, 5);
let resultado3 = numeroMayor(1, 5);
let resultado4 = porsiMismo(5);
// Problema #1
function holaMundo(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Problema #2
function holaNombre(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto + " " + nombre + "!";
}

// Problema #3
function multiplicarPorDos(numero) {
    return numero * 2;
}

// Problema #4
function promedioDetres(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// Problema #5
function numeroMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Problema #6
function porsiMismo(num1) {
    return num1 * num1;
}

// Llamadas a las funciones después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    holaMundo('#h1', '¡Hola mundo!');
    holaNombre('#h2', '¡Hola');
    //imprime el resultado de la multiplicación
    document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
    //imprime el resultado del promedio
    document.getElementById('resultado2').textContent = 'El resultado es: ' + resultado2;
    //imprime el número mayor
    document.getElementById('resultado3').textContent = 'El mayor es: ' + resultado3;
    //imprime el cuadrado del número
    document.getElementById('resultado4').textContent = 'El cuadrado es: ' + resultado4;
});
