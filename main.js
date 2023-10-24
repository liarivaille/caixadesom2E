//criando/declarando a função tocaSom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamando/invocando a função tocaSom com parâmetro idElementoAudio
document.querySelector('.tecla_pom').onclick = tocaSom;

//criando a referência constanate listaDeTeclas 
const listaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é o 1º item da lista de teclas 
listaDeTeclas[0].onclick = tocaSom;
//criando referência variável contador, atribuindo o valor inicial como "0"
let contador = 0;
//criando o código de repetição WHILE
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1;
    console.log (contador);
}