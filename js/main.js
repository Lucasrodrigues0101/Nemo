function generateToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!validateEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    if (mensagem.length < 1) {
        alert('Por favor, insira uma mensagem com pelo menos 1 caractere.');
        return;
    }

    const token = generateToken();
    console.log('Token gerado:', token); // Você pode fazer algo com o token aqui

    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.innerText = 'Mensagem enviada com sucesso! Seu token é: ' + token;
    mensagemSucesso.style.display = 'block'; // Mostra a mensagem de sucesso
    mensagemSucesso.style.backgroundColor = '#28a745'; // Cor verde para sucesso
    mensagemSucesso.style.color = '#fff'; // Cor branca para o texto
}
