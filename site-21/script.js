const btnvermelho = document.getElementById('vermelho');
const btnVerde = document.getElementById('verde');
const btnAzul = document.getElementById('azul');

btnvermelho. addEventListener('click', function() {
    document.body.style.backgroundColor ='red';
});

btnVerde. addEventListener('click', function() {
    document.body.style.backgroundColor ='green';
});

btnAzul. addEventListener('click', function() {
    document.body.style.backgroundColor ='blue';
});