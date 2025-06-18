btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');

const mensagem = document.getElementById('resultado');

btn1.addEventListener('click', function() {
    mensagem.innerText = '🎉😘Você acertou!';
});
btn2.addEventListener('click', function() {
    mensagem.innerText = '❌🙄Tente novamente!';
});
btn3.addEventListener('click', function() {
    mensagem.innerText = '❌👎Tente novamente!';
});