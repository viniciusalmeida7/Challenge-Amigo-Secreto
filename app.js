//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Array para armazenar os nomes
let amigos = []


// limpar campo
function limparCampo(){
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}

// função para adicionar amigos
function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == ''){
        alert('Por favor, insira um nome válido.');
    }
    else{
        // incluir na lista somente se o amigo já não estiver incluído
        if (!amigos.includes(nomeAmigo)){
            amigos.push(nomeAmigo);           
            atualizarListaAmigos();
        }
        limparCampo();
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML= '';

}

//função para atualizar a lista de amigos
function atualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    console.log(lista.li);
}


// Para o botão Adicionar funcionar com a tecla 'Enter'
document.addEventListener('keypress',function(e){
    if(e.key == 'Enter'){
        document.getElementById('botaoAmigo').click();
    }
});

//função para sortear os amigos
function sortearAmigo(){

    if (amigos.length != 0){
        
        //sorteia um elemento
        let indice = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indice];

        //exibe mensagem na tela
        let mensagemAmigoSorteado = `O amigo secreto sorteado é ${sorteado}`;
        let resultado = document.getElementById('resultado');
        resultado.innerHTML= mensagemAmigoSorteado;
    }
    amigos = [];
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

}
