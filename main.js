//criando/declarando a função tocaSom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando a referência constante listaDeTeclas 
const listaDeTeclas = document.querySelectorAll('.tecla');
// criando refêrencia variável contador, atribuindo o valor inicial com "0"
let contador = 0;
//criando o código de repetição WHILE
while (contador < listaDeTeclas.length;contador = contador +1;) {
    const efeito [contador] .classList[1];//chama a classe do som
    const idAudio = #som_+efeito;
    listaDeTeclas[contador].onclick = function(){ //função anonima para tocaSom
        tocaSom(idAudio);
    };
}