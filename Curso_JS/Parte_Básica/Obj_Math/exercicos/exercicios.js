// My solution
// const num = 55;
// document.body.innerHTML  = `Seu número é ${num}<br/>`
// document.body.innerHTML += `Raiz quadrada: ${Math.pow(num,0.5)}<br/>`
// document.body.innerHTML += `${num} é inteiro: ${!!(Number(num))}<br/>`
// document.body.innerHTML += `É NaN: ${Number(num)}<br/>`
// document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br/>`
// document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)}<br/>`
// document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br/>`

const num = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número é ${num}<br/></p>`;
texto.innerHTML += `<p>${num} é inteiro: ${!!(Number(num))}<br/>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}<br/></p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}<br/></p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}<br/></p>`;
texto.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br/>`;


