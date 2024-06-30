//Variables
let numeroMaximoPosible = parseInt(prompt("Indicame el numero que quieres que sea el maximo posible: "));
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroMinimo = parseInt(prompt("Indicame el numero que quieres que sea el minimo: "));
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${numeroMinimo} y ${numeroMaximoPosible}  por favor:`));

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