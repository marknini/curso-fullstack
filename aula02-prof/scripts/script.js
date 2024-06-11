// arrow function chamada mudaTexto
// dentro dela uma variável titulo que recebe
// valor document.getElementById("id-do-elemento")
// na outra linha chame: essa-variave.innerText = "Novo texto"
// dentro do HTML conecte o scripts/script.js
// <script src="js/script.js"></script>
// coloque essa importação antes de fechar o body


const mudaTexto = () => {
    let elementoMudaTexto = document.getElementById("titulo");
    elementoMudaTexto.innerText = "Mudoou!";
    
}
