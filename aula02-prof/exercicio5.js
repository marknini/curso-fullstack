var notas = [7.5, 5, 8.5];

const imprime = () => {
    
    var resultado;

    const media = ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(2);

    if (media >= 7){
        resultado=("o aluno passou");
    } else{
        resultado=(`o aluno reprovou`);
    }

    console.log(`\n
    A primeira nota do aluno é: ${notas[0]}\n
    A segunda nota do aluno é: ${notas[1]}\n
    A terceira nota do aluno é: ${notas[2]}\n
    A media do aluno é ${media} portanto ${resultado}`)
}

imprime();