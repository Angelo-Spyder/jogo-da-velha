
/*CAPTURA DE DADOS*/
let pontosX = document.querySelector("#pontosX");
let pontos0 = document.querySelector("#pontos0");

let tabuleiro = document.querySelector(".tabuleiro");
let posicao = document.querySelectorAll(".posicao");

let status = document.querySelector(".status-partida");
let reiniciar = document.querySelector("#btn-reiniciar");

/*COLOCANDO ELEMENTOS NA TELA*/
let vez = true

    tabuleiro.addEventListener("click", function(event){
        if(event.target.tagName == "SPAN"){
            if(vez){
                event.target.textContent = "X"
                vez = false
                validarJogada(event.target.textContent);
            }else{
                event.target.textContent = "0"
                vez = true
                validarJogada(event.target.textContent);
            }
        }
    })
    

/*ESTRATEGIAS*/
function validarJogada(jogada){
    if(estrategia1(jogada)){
        console.log("jogador "+ jogada +" venceu")
    }else{

    }
}
function estrategia1(valor){
    let resultado = (posicao[0].textContent == valor && posicao[1].textContent == valor && posicao[2].textContent == valor)
    return resultado
}

/*REINICIAR*/
reiniciar.addEventListener("click", function(){
    for(var i = 0; i < 9; i++){
        posicao[i].textContent = ""
    }
})