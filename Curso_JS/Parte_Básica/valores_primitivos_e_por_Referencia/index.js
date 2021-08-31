/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Lucas',
    sobrenome: 'Araújo'
  };
  const b = {...a};
  
  b.nome = 'João';
  console.log(a);
  console.log(b);