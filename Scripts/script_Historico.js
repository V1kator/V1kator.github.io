var mensagens = [
    "Usuário: EvaComeMaça poderia ter usado isso em vez de ficar ouvindo uma cobra falante",
    "Usuário: Gideao300 usou essa conta há 350 anos",
    "Usuário: JudasTraira usou esse cálculo há 5 dias",
    "Usuário: DaviMataGolias usou há 3 minutos",
    "Usuário: Lucas Médico tentou, porém, errou há 1 minuto atrás"
];

var imagens = [
    "/img/evaa.jpg",
    "/img/GIDEAO.jpg",
    "/img/judas.jpg",
    "/img/davi.jpg",
    "/img/lucas.jpg"
]

var indice = 0;

function mostrar() {
    var input = document.getElementById("inputText").value;
    var resultadospan = document.getElementById("Resultadosapn");
    var usuarioImg = document.getElementById("usuarioImg");
    if (input.trim() === "") {
        alert("Por favor, preencha o campo de cálculo antes de pesquisar.");
        return;
    }

    resultadospan.textContent = mensagens[indice];
    usuarioImg.src = imagens[indice];
    usuarioImg.style.display = "block";     
    indice++;

    if (indice >= mensagens.length) {
        indice = 0;
    }
}

function limparsapn(){
    document.getElementById("Resultadosapn").textContent = "";
    document.getElementById("inputText").value = "";
    document.getElementById("usuarioImg").style.display = "none";
}