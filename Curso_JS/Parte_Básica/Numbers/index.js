let num1 = 1748;
let num2 = 2.548945648;

console.log(num1+num2);

console.log(num1.toString()+num2);
//para alterar mesmo o valor num1=num1.toString();
console.log(typeof num1);
console.log(num1.toString(2));  //Representação binária
console.log(num2.toFixed(2));  //Número de casas decimais
console.log(Number.isInteger(num2)) //Checa se é inteiro 


let aux = 0.7;
let aux2 = 0.1;


aux += aux2;
aux += aux2;
aux += aux2;

aux = parseFloat(aux.toFixed(2)) //também posso usar Number()

console.log(aux);
console.log(Number.isInteger(aux));