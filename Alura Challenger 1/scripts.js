// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('encryptButton').addEventListener('click', encryptText);
    document.getElementById('decryptButton').addEventListener('click', decryptText);
    document.getElementById('copyButton').addEventListener('click', copyToClipboard);

    function encryptText() {
        let input = document.getElementById('inputText').value;
        let encrypted = input.replace(/e/g, "enter")
                             .replace(/i/g, "imes")
                             .replace(/a/g, "ai")
                             .replace(/o/g, "ober")
                             .replace(/u/g, "ufat");
        document.getElementById('outputText').value = encrypted;
    }

    function decryptText() {
        let input = document.getElementById('inputText').value;
        let decrypted = input.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
        document.getElementById('outputText').value = decrypted;
    }

    function copyToClipboard() {
        let output = document.getElementById('outputText');
        output.select();
        output.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand('copy');
        alert('Texto copiado: ' + output.value);
    }
});
function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto'; // Resetea la altura para recalcular
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Ajusta la altura al contenido
}

// Llamar a la función para inicializar la altura al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    adjustTextareaHeight(inputText);
});
