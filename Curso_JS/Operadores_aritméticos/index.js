/*
Aritméticos
+ Adição / Concatenação (- / *)
** Potenciação
% Resto da divisão
*/


const num1 = 10;
const num2 = 5;
console.log(num1 % num2);

/*
Precedencia
1:  ()
2:  **
3:  * / %
4:  + -
*/

//incremento ++
let cont = 0;
console.log(cont);
cont++; //1
console.log(cont);
cont++; //2
console.log(cont);
cont++; //3
console.log(cont);
console.log(++cont); //4

//decremento --
let cont1 = 0;
cont1--;    //-1
console.log(cont1);


//NaN - Not a number
const num10 = 10; 
const num20 = parseInt('5'); // or parseFloat
console.log(num10 + num20);