const form = document.getElementById('form-numero');
const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');
let numeroEValido = false;

function validaNumero() {
    const valorPrimeiroNumero = parseFloat(primeiroNumero.value);
    const valorSegundoNumero = parseFloat(segundoNumero.value);

    if (valorPrimeiroNumero < valorSegundoNumero) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        const primeiroNumero = document.getElementById('primeiro-numero');
        const segundoNumero = document.getElementById('segundo-numero');
        const mensagemSucesso = `O múmero: <b>${primeiroNumero.value}<b> é menor que o número: <b>${segundoNumero.value}<b>`;
        document.querySelector('.sucess-message').innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';
        primeiroNumero.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    } else {
        const mensagemErro = `O múmero: <b>${primeiroNumero.value}<b> não é menor que o número: <b>${segundoNumero.value}<b>`;
        document.querySelector('.error-message').innerHTML = mensagemErro
        primeiroNumero.classList.remove('sucess')
        document.querySelector('.sucess-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    numeroEValido = validaNumero(primeiroNumero.value)

})

