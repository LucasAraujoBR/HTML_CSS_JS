//               01234567
let umaString = 'Um texto';

console.log(umaString);
console.log(umaString.indexOf('texto'));
console.log(umaString.charAt(4));
console.log(umaString.concat('concatenado.'));
console.log(`${umaString} em um lindo dia.`);
console.log(umaString+` em um lindo dia.`);
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));
console.log(umaString.replace(/U/g, '#'));
console.log(umaString.length)
console.log(umaString.slice(0,5));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());