/* 
- Com BREAK podemos encerrar uma instrução;
- Com CONTINUE podemos pular uma instrução;
- Utiliziados na maioria das vezes em loops;
*/
for (var i = 10; i > 0; i--) {
  console.log(i);

  if (i === 5) {
    break;
  }
}

console.log('Deu o Break!');

var x = 10;

while (x < 100) {
  x += 10;

  if (x === 60 || x === 90) {
    console.log('Continue');
    continue;
  }
  console.log('Testando Continue');

}