let pessoa = {
    nome: `Marknini`,
    cpf: `000.000.000-00`,
    cidade: `João Pessoa`,
    notas: [7,9,10,8.5]
};
/*
console.log(pessoa);

console.log(pessoa.nome, pessoa.cpf, pessoa.cidade);

console.log(pessoa.notas[0]);

console.log(pessoa.notas[1]);

console.log(pessoa.notas[2]);
*/

const media = (pessoa.notas[0] + pessoa.notas[1] + pessoa.notas[2] + pessoa.notas[3])/pessoa.notas.length;

console.log(media.toFixed(2));

const aleaMedia = (pessoa.notas[Math.floor(Math.random()*pessoa.notas.length)]);

const convertMedia = (aleaMedia)*10;

console.log(convertMedia);


const mostraTudo =() => {
    console.log(`A primeira nota do aluno é: ${pessoa.notas[0]}\n 
    A segunda nota do aluno é: ${pessoa.notas[1]}\n
    A terceira nota do aluno é: ${pessoa.notas[2]}\n
    A quarta nota do aluno é: ${pessoa.notas[3]}\n
    A media é: ${media}\n
    A nota sorteada foi: ${aleaMedia} e convertida para a escala de 0-100 é: ${convertMedia}`)
};

mostraTudo(pessoa);

console.log(media);

