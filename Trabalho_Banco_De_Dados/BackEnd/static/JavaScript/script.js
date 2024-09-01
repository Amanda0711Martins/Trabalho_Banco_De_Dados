// Função para iniciar o cronômetro
function iniciarTempo(duracao, display) {
    var tempo = duracao, minutos, segundos;
    setInterval(async function  () {
        minutos = parseInt(tempo / 60, 10);
        segundos = parseInt(tempo % 60, 10);

        minutoFormatados = minutos < 10 ? "0" + minutos : minutos;
        segundosFormatados = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutoFormatados + ":" + segundosFormatados;

        if (tempo <= 10) {
            display.classList.add('finalTempo');
        } else {
            display.classList.remove('finalTempo');
        }

        if (--tempo < 0) {
            tempo = duracao;
        }
        await fetch('http://') //colocar a rota do back end fim de jogo 
        .then(T => T.json())
        .then(console.log)
    }, 1000);


}



// Função para exibir mensagens com animação
function exibirMensagens() {
    var mensagens = [
        'Seja bem vindos, Meus colegas e minhas colegas de trabalho…!!!',
        'Aproveite o jogo!',
        'Vale tudo, tudo, tudo!',
        'Você está indo muito bem!',
        'Segura essa emoção',
        'Não consegue né',
        'Ma ôe',
        'O prêmio é uma maravilha!',
    ];
    var index = 0;
    var fala = document.querySelector('.balao');
    function trocarMensagem() {
        fala.classList.remove('finalTempo');
        escreverMensagem(mensagens[index]);
        index = (index + 1) % mensagens.length;
    }

    function escreverMensagem(texto) {
        fala.innerHTML = '';
        let i = 0;
        const intervalo = setInterval(() => {
            fala.innerHTML += texto.charAt(i);
            i++;
            if (i >= texto.length) {
                clearInterval(intervalo);
                setTimeout(trocarMensagem, 5000); // Tempo antes de trocar a mensagem
            }
        }, 40); // Velocidade da digitação
    }

    trocarMensagem();
}

// Inicia a função do cronômetro e exibe as mensagens
window.onload = function () {
    var duracao = 60;
    var display = document.querySelector('.tempo');
    iniciarTempo(duracao, display);
    exibirMensagens();
}


// Seleciona os campos de entrada e spans
const nomeCampo = document.querySelector('input[name="nome"]');
const emailCampo = document.querySelector('input[name="email"]');
const senhaCampo = document.querySelector('input[name="senha"]');
const confirmarSenhaCampo = document.querySelector('input[name="confirmeSenha"]');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validação do nome
function nomeValidacao() {
    const nome = nomeCampo.value;
    const nomeSpan = spans[0];

    if (nome.length < 3) {
        nomeSpan.style.display = 'block';
    } else {
        nomeSpan.style.display = 'none';
    }
}

// Validação do email
function emailValidacao() {
    const email = emailCampo.value;
    const emailSpan = spans[1];

    if (!emailRegex.test(email)) {
        emailSpan.style.display = 'block';
    } else {
        emailSpan.style.display = 'none';
    }
}

// Validação da senha
function senhaValidacao() {
    const senha = senhaCampo.value;
    const senhaSpan = spans[2];

    if (senha.length < 8) {
        senhaSpan.style.display = 'block';
    } else {
        senhaSpan.style.display = 'none';
    }
}

// Validação da confirmação de senha
function confirmarSenhaValidacao() {
    const senha = senhaCampo.value;
    const confirmarSenha = confirmarSenhaCampo.value;
    const confirmarSenhaSpan = spans[3];

    if (senha !== confirmarSenha) {
        confirmarSenhaSpan.style.display = 'block';
    } else {
        confirmarSenhaSpan.style.display = 'none';
    }
}

// Adiciona eventos aos campos
nomeCampo.addEventListener('input', nomeValidacao);
emailCampo.addEventListener('input', emailValidacao);
senhaCampo.addEventListener('input', senhaValidacao);
confirmarSenhaCampo.addEventListener('input', confirmarSenhaValidacao);

//login
const formLogin = document.getElementById('loginForm');
const loginError = document.getElementById('loginError')


formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dadosLogin = {
        email: email,
        senha: senha
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosLogin)

    })
        .then(response => response.json()) 
        .then(data => {
            if (data.success) {
                window.location.href = '/homePage.html'; 
            } else {
                loginError.textContent = data.message;
                loginError.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Erro ao realizar o login:', error);
            loginError.textContent = 'Ocorreu um erro inesperado. Tente novamente.';
            loginError.style.display = 'block';
        });
});
