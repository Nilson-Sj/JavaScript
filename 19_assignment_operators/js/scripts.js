/* 
- Temos algumas maneiras de atribuir um valor a uma variável;
- As mais utilizadas são: += (SOMAR), -= (SUBTRAIR), *= (MULTIPLICAR), /= (DIVIDIR);
- Basicamente é uma forma resumida da operação: x= x+y;
- Em loops também é comum utilizar os operadores ++ ou --;
*/
var x = 1;
var y = 2;

// SOMA
console.log(x = x + y);
console.log(x += y);

// SUBTRAÇÃO
console.log(x -= y);

// MULTIPLICAÇÃO
console.log(x *= y);

// DIVISÃO
console.log(x /= y);

// LOOPS
console.log(x++);
console.log(x--);

while (x <= 100) {

  console.log(x);

  x *= 2;
}

console.log(x);

var j = 5;

while (x > 0) {

  console.log(x);

  x -= j;
}