/* 
- FOR tem uma sintaxe mais complexa, mas é optado pela maioria dos programadores;
- Apesar de parecer mais difícil, porém, como a instrução fica toda em uma linha proporciona maior controle;
*/
for (var i = 0; i <= 10; i++) {
  console.log('Repetindo o for por:' + i);
}

var arr = [1, 2, 3, 4];

for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}

console.log(arr.length);

for (var x = 5; x < 100; x *= 3) {
  console.log(x);
}