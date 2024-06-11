const cpf = "000.000.000-00";

var nome = "Marknini";

function sobreNome() {
    let sobreNome = "Toscano";
    //console.log(sobreNome);
    return sobreNome;
}

console.log(nome);
console.log(sobreNome());
console.log(cpf);
console.log(`O nome é: ${nome}. O sobrenome é: ${sobreNome()}. O CPF é: ${cpf} `);
