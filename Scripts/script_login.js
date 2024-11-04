$(document).ready(function () {
    $('#cadastrar').click(function () {
        let senha = $('#senha').val();
        let repitaSenha = $('#repitaSenha').val();

        if (senha == "admin" && repitaSenha == "admin") {
            window.location.href = "/Calculadora.html";
        }
        else if (senha === "" || repitaSenha === "") {
            $('#mensagem').text("Por favor, preencha todos os campos.");
        } else if (senha !== repitaSenha) {
            $('#mensagem').text("As senhas não coincidem.");
        } else {
            $('#mensagem').text("A senha '" + senha + "' já está sendo usada pelo usuário: carlinhos123");
        }
    });
});
