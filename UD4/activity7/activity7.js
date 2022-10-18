let texto = prompt("Dime una frase");
let texto_normalizado = texto.toLowerCase().match(/[a-z]/gi).reverse();
if(texto_normalizado.join('') === texto_normalizado.reverse().join('')){
    document.write("Es palindromo");
}else{
    document.write("No es palindromo");
}