async function buscaEndereco(cep) {
        var mensagemErro = document.getElementById('erro');
        mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepJson = await consultaCep.json();
        if(consultaCepJson.erro){
            throw Error('CEP não existe');
        }

        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var complemento = document.getElementById('complemento');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        endereco.value = consultaCepJson.logradouro;
        bairro.value = consultaCepJson.bairro;
        complemento.value = consultaCepJson.complemento;
        cidade.value = consultaCepJson.localidade;
        estado.value = consultaCepJson.uf;

        console.log(consultaCepJson);
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido! tente novamente.</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


// buscaEndereco();

// var consultaCep = fetch('https://viacep.com.br/ws/77060384/json/')
//     .then(response => response.json())
//     .then(r => {
//         if(r.erro){
//             throw Error('Esse cep não existe');
//         } else {
//             console.log(r);
//         }
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluido'));
// ;
//
// console.log(consultaCep);