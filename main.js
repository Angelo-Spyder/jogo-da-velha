
/*CAPTURA DE DADOS*/
let pontosX = document.querySelector("#pontosX");
let pontos0 = document.querySelector("#pontos0");

let tabuleiro = document.querySelector(".tabuleiro");
let posicao = document.querySelectorAll(".posicao");

let status = document.querySelector(".status-partida");
let reiniciar = document.querySelector("#btn-reiniciar");

/*COLOCANDO ELEMENTOS NA TELA*/
let vez = true
console.log(posicao[0], posicao[1])
posicao.forEach( ()=>{
    tabuleiro.addEventListener("click", function(event){
        if(event.target.tagName == "SPAN"){
            if(vez){
                event.target.textContent = "X"
                vez = false
            }else{
                event.target.textContent = "0"
                vez = true
            }
        }
        estrategia1()
    })
})


/*ESTRATEGIAS*/
function estrategia1(){

    if(posicao[0].textContent === posicao[1].textContent && posicao[1].textContent === posicao[2].textContent){
        console.log("venceu")
    }
}
