/* 
- O operador lógico || é conhecido como OR;
- Ele retorna true caso uma das operações retorne verdadeiro;
- O OR retorna false apenas se as duas expressões são falsas;
*/
var idade = 16;
var nome = 'Nilson';

if(nome == 'Nilson' || idade > 14) {
  console.log('Pode entrar na aula de programação');
} else {
  console.log('Não pode entrar');
}

if(nome == 'Pedro' && (30 > 20 || 10 == 10)) {
  console.log('Testando');
} else {
  console.log('Não Entrou');
}

if (nome == 'Pedro' || (30 > 20 && 10 == 10)) {
  console.log('Testando');
} else {
  console.log('Não Entrou');
}