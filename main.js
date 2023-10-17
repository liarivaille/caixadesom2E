//criando/declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamando/invocando a função tocaSomPom
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//criando a referência constanate listaDeTeclas 
const listaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é o 1º item da lista de teclas 
listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;
//criando o código de repetição WHILE
while () {

}