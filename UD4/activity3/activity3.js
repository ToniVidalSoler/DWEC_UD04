let array = [];
for (let i = 0; i < 50; i++) {
    let numero = (Math.floor(Math.random() * 50) + 1)
    while(array.includes(numero) == true){
        numero = (Math.floor(Math.random() * 50) + 1)
    }
    array[i] = numero;
}
document.write(array);