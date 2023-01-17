/* 
- Estas estruturas servem para repetir inumeras vezes uma operação;
- Ex: Repetir uma determinada lógica em cada elemento de um array;
- As estruturas mais comuns são: WHILE E FOR;
- !OBS! => TOMAR CUIDADO COM O LOOP INFINITO 

               -- ESTRUTURA WHILE --

- O while é a estrutura de repetição mais simples do JS;
- A ideia é que se repita algo até tal condição;
- While => Enquanto;
*/
var x = 0;

while (x <= 5) {
  console.log('Testando Repetição' + ` ${x}`);

  //incremetador
  x++;
}

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while (y <= 3) {
  console.log(arr[y]);

  y++;
}

var palavra = 'Nilson Junior';
var i = 0;

while (i <= 12) {
  console.log(palavra[i]);

  // Outra maneira de incremetador
  i += 1;
}