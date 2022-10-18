let cadenaAnalizar = prompt("Escribe texto");
cadenaAnalizar = cadenaAnalizar.toLowerCase();
let key = parseInt(prompt("Indica Key"));
for (let i = 0; i < cadenaAnalizar.length; i++) {
    let caracter = cadenaAnalizar.charCodeAt(i);
    caracter = caracter+key;
    if(caracter > 122){
        caracter = caracter - 26
    }
    let cifrado = String.fromCharCode(caracter)
    if(cifrado == "#" || cifrado == "\""){
        cifrado = " ";
    }
    document.write(cifrado);
}