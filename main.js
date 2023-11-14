//criando/declarando a função tocaSom com parâmetro idElementoAudio 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando a referência constante listaDeTeclas 
const listaDeTeclas = document.querySelectorAll('.tecla');
// criando refêrencia variável contador, atribuindo o valor inicial com "0"
//criando o código de repetição WHILE
//enquanto o contador for menos que o comprimento da lista, tocará o som
for(let contador = 0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito [contador] .classList[1];//chama a classe do som
    const idAudio = #som_§efeito;//junção com template string
    tecla.onclick = function(){ //função anônima para tocaSom
        tocaSom(idAudio);

    }