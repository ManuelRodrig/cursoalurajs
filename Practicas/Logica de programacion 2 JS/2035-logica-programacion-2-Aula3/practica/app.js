let kilogrmaos = 90; // Corrected to be a number
let estaturametros = 1.73; // Corrected to be a number and converted to meters
let factorial = 5; // Corrected to be a number
let tasaDeCambio = 4.80;
let cantidadEnDolares = 100; // Define the amount in dollars
const Pi = 3.14;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Problema # 1: Calcular índice de masa corporal (IMC)
function indicedeMasacorporal() {
    return kilogrmaos / (estaturametros * estaturametros); 
}

// Problema # 2: Calcular factorial de un número
function calcularFactorial(factorial) {
    if (factorial < 0) return -1;
    let result = 1; 
    for (let i = 1; i <= factorial; i++) {
        result *= i;
    }
    return result;
}

// Problema # 3: Calcular cantidad en reales brasileños a partir de dólares
function calcularReales(dolares, tasaDeCambio) {
    return dolares * tasaDeCambio;
}

let cantidadEnReales = calcularReales(cantidadEnDolares, tasaDeCambio);

// Problema # 4: Calcular área y perímetro de una sala rectangular
function areaYperimetro(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    return { area, perimetro };
}

let { area, perimetro } = areaYperimetro(5, 10);

// Problema # 5: Calcular área y perímetro de una sala circular
function calcularAreaYPerimetroCirculo(radio) {
    let area = Pi * Math.pow(radio, 2);
    let perimetro = 2 * Pi * radio;
    return { area, perimetro };
}

function mostrarAreaYPerimetroCirculo(radio) {
    let { area, perimetro } = calcularAreaYPerimetroCirculo(radio);
    asignarTextoElemento('h4', `El área de la sala circular es: ${area} metros cuadrados.`);
    asignarTextoElemento('h5', `El perímetro (circunferencia) de la sala circular es: ${perimetro} metros.`);
}

// Problema # 6: Mostrar tabla de multiplicar de un número
function mostrarTablaDeMultiplicar(num) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${num} x ${i} = ${num * i}<br>`;
    }
    asignarTextoElemento('h6', tabla);
}

// Asignar resultados a elementos HTML
asignarTextoElemento('h1', 'Su índice de masa corporal es: ' + indicedeMasacorporal() + '.');
asignarTextoElemento('h2', `El factorial de ${factorial} es: ` + calcularFactorial(factorial) + '.');
asignarTextoElemento('p', `La cantidad de ${cantidadEnDolares} USD es equivalente a ${cantidadEnReales} BRL.`);
asignarTextoElemento('h3', `El perímetro de la sala rectangular es de ${perimetro} metros y el área es de ${area} metros cuadrados.`);

// Llamar a las funciones para mostrar los resultados
mostrarAreaYPerimetroCirculo(7); // Puedes cambiar el valor del radio según sea necesario
mostrarTablaDeMultiplicar(3); // Puedes cambiar el valor del número según sea necesario
