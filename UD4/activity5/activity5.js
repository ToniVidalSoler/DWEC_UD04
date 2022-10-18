let letrasnombre = "abcdefghijklmnopqrstuvwxyz0123456789"
let comprobarnombre
do{
    comprobarnombre = true
    let nombre = prompt("Escribe tu nombre")
    for(let i=0; i<nombre.length; i++){
        if(letrasnombre.includes(nombre[i]) == false){
            alert("Nombre no valido")
            comprobarnombre = false
        }
    }
}while(comprobarnombre == false)
let mayuscontrasenya = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minuscontrasenya = "abcdefghijklmnopqrstuvwxyz"
let numerocontrasenya = "0123456789"
let mayus
let minus
let num
let caracter
do {
    let contrasenya = prompt("Escribe tu contraseña")
    mayus = false
    minus = false
    num = false
    caracter = false
    for(let j=0; j<contrasenya.length; j++){
        if(mayuscontrasenya.includes(contrasenya[j]) == true){
            mayus = true
        }
        else if(minuscontrasenya.includes(contrasenya[j]) == true){
            minus = true
        }
        else if(numerocontrasenya.includes(contrasenya[j]) == true){
            num = true
        }
        else{
            caracter = true
        }
    }
}while(mayus==false || minus==false || num==false || caracter==false)
