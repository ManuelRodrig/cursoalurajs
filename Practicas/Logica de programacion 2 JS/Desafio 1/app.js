let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

function Console(){
    alert("El boton fue clicado");
}

function Prompt(){
    let Brasil = prompt("Dame el nombre de una ciudad de Brasil: ");
    alert("Estuve en "+ Brasil +" y me acorde de ti");
}

function Alerta(){
    alert("Yo amo JS");
}

function Suma(){
    let num1 = parseInt(prompt("Dame un numero: "));
    let num2 = parseInt(prompt("Dame otro numero: "));
    let suma = num1 + num2;
    alert("La suma es: " + suma);
}