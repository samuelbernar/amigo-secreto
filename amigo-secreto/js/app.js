let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    if (amigo.value == '' || amigos.includes(amigo.value)) {
        return alert('Erro! Revise os dados digitados');
    } 
    
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    
    amigo.value = '';
}

function sortear() {
    let sorteio = document.getElementById('lista-sorteio');
    
    // Limpar o conteúdo do sorteio anterior
    sorteio.innerHTML = '';
    
    if (amigos.length < 4) {
        return alert('Erro! O mínimo de amigos é 4');
    }

    // Embaralhar os amigos antes de sortear
    embaralha(amigos);

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
function remover() {
    let lista = document.getElementById('lista-amigos');
    
    if (amigos.length === 0) {
        return alert('Erro! Não há amigos na lista para remover.');
    }
    
    // Remover o último amigo da lista de amigos
    amigos.pop();
    
    // Atualizar a exibição da lista de amigos
    if (amigos.length === 0) {
        lista.textContent = ''; // Se não houver mais amigos
    } else {
        lista.textContent = amigos.join(', '); // Exibir a lista atualizada
    }
}