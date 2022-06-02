
/*CAPTURA DE DADOS*/
let pontosX = document.querySelector("#pontosX");
let pontos0 = document.querySelector("#pontos0");

let tabuleiro = document.querySelector(".tabuleiro");
let posicao = document.querySelectorAll(".posicao");

let status = document.querySelector(".status-partida");
let reiniciar = document.querySelector("#btn-reiniciar");

/*COLOCANDO ELEMENTOS NA TELA*/
let vez = true

posicao.forEach( ()=>{
    tabuleiro.addEventListener("click", function(event){
        console.log(event.target)
        if(vez){
            event.target.textContent = "X"
            vez = false
        }else{
            event.target.textContent = "0"
            vez = true
        }
    })
})
