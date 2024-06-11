const notas = [8.50, 9.00, 10.00];

console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A primeira nota é: ${notas[1]}`);
console.log(`A primeira nota é: ${notas[2]}`);


var media = (notas[0]+notas[1]+notas[2])/notas.length;

console.log(`A media do aluno foi: ${media.toFixed(2)}`);

