const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const historyBtn = document.getElementById('historyBtn');
let valorInserido = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            valorInserido = '';
            display.textContent = '0';
        } else if (buttonText === 'DEL') {
            valorInserido = valorInserido.slice(0, -1);
            display.textContent = valorInserido || '0';
        } else if (buttonText === '=') {
            if (valorInserido.match(/^\d+\+0$/)) {
                // Qualquer número + 0
                valorInserido = 'É sério isso?';
                display.textContent = valorInserido;
            } else if (valorInserido.match(/^\d+\/0$/)) {
                // 0 / 0
                display.textContent = '';                
                const blueScreen = document.createElement('img');
                blueScreen.src = '/img/Tela_azul.jpg';
                blueScreen.alt = 'Tela Azul do Windows 10';
                blueScreen.style.width = '100%';
                document.body.innerHTML = ''; // Limpa a tela
                document.body.appendChild(blueScreen);
            } else {                
                valorInserido = 'Este cálculo já existe';
                display.textContent = valorInserido;
            }
        } else {
            if (valorInserido === '0') {
                valorInserido = buttonText;
            } else {
                valorInserido += buttonText;
            }
            display.textContent = valorInserido;
        }
    });
});

// Redirecionamento para página de histórico
historyBtn.addEventListener('click', () => {
    window.location.href = '/Historico.html';
});

