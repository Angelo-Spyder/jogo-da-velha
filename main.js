
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

            if(event.target.textContent != ""){
                alert("conteúdo já selecionado")
            }else{
                if(vez){
                    event.target.textContent = "X"
                    validarJogada(event.target.textContent);
                    vez = false  
                }else{
                    event.target.textContent = "0"
                    validarJogada(event.target.textContent);
                    vez = true
                }
            }
        }
    })
    

/*ESTRATEGIAS*/
function validarJogada(jogada){
    if(
        estrategia1(jogada)|| 
        estrategia2(jogada)|| 
        estrategia3(jogada)||
        estrategia4(jogada)||
        estrategia5(jogada)||
        estrategia6(jogada)||
        estrategia7(jogada)||
        estrategia8(jogada)
        ){
        status.textContent = "vitória do jogador " + jogada
        if(jogada == "0"){
            pontos0.textContent = Number(pontos0.textContent) + 1
            setTimeout( () => {
                resetarJogo()
            },1000)
            
        }
        if(jogada == "X"){
            pontosX.textContent = Number(pontosX.textContent) + 1
            setTimeout( () => {
                resetarJogo()
            },1000)
        }
    }else{

    }
}

function estrategia1(valor){
    let resultado = (posicao[0].textContent == valor && posicao[1].textContent == valor && posicao[2].textContent == valor)
    return resultado
}
function estrategia2(valor){
    let resultado = (posicao[3].textContent == valor && posicao[4].textContent == valor && posicao[5].textContent == valor)
    return resultado
}
function estrategia3(valor){
    let resultado = (posicao[6].textContent == valor && posicao[7].textContent == valor && posicao[8].textContent == valor)
    return resultado
}
function estrategia4(valor){
    let resultado = (posicao[0].textContent == valor && posicao[3].textContent == valor && posicao[6].textContent == valor)
    return resultado
}
function estrategia5(valor){
    let resultado = (posicao[1].textContent == valor && posicao[4].textContent == valor && posicao[7].textContent == valor)
    return resultado
}
function estrategia6(valor){
    let resultado = (posicao[2].textContent == valor && posicao[5].textContent == valor && posicao[8].textContent == valor)
    return resultado
}
function estrategia7(valor){
    let resultado = (posicao[0].textContent == valor && posicao[4].textContent == valor && posicao[8].textContent == valor)
    return resultado
}
function estrategia8(valor){
    let resultado = (posicao[2].textContent == valor && posicao[4].textContent == valor && posicao[6].textContent == valor)
    return resultado
}



/*REINICIAR*/

function resetarJogo(){
    for(var i = 0; i < 9; i++){
        posicao[i].textContent = ""
        vez = true
        status.textContent = "começar"
    }
}

reiniciar.addEventListener("click", function reiniciarJogo(){
    for(var i = 0; i < 9; i++){
        posicao[i].textContent = ""
        vez = true
        status.textContent = "começar"
        pontos0.textContent = "0"
        pontosX.textContent = "0"
    }
})