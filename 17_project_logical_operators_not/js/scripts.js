/* 
- O operador lógico ! é conhecido como NOT;
- Este operador muda o valor que a expressão retornou;
- Se recebeu true vira false, se recebeu false vira true;
*/
if (!false) {
  console.log('Passou!');
}

var nome = 'Nilson';

if (!(nome == 'Rafael')) {
  console.log('Ok!');
}