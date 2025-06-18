var cliques = 0;
var meta = 10;

var botao = document.getElementById("botaoClique");

botao.addEventListener("click", function() {

    cliques = cliques + 1;

    document.getElementById("contador").innerText = "Cliques: " + cliques;

    if (cliques === meta) {
        document.getElementById("mensagem").innerText = "Parabens! Você "

    }
});