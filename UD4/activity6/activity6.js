let array = new Array(20)
for(let i = 0; i < array.length; i++){
    let numero = (Math.floor(Math.random()*50)+1)
    array[i]=numero
    for(let j = 1; j<=array[i];j++){
        document.write("*")
    }
    document.write("<br>")
}