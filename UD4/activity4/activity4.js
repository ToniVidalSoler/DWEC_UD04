let numero=[0,0,0,0,0,0,0,0,0,0,0]
for (let i = 1; i <= 10000; i++) {
    let random = (Math.floor(Math.random() * 10) + 1)
    numero[random] += 1
}
for(let j=1; j<numero.length; j++){
    document.write(("El numero " + j + " ha salido: " +numero[j] + "<br>"))
}