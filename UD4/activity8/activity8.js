let suma = 0 
let numero = 0
let contador = 0
let media = 0
do{
    numero = parseInt(prompt("Indica un numero"))
    if(numero == 0 || isNaN(numero));
    else{
        contador ++
        suma = suma+numero
        media = suma/contador
    }
}while(numero != 0 || numero != null)
document.write(media)