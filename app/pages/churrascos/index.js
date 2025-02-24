function carregaEMostraLista() {
    const lists = JSON.parse(localStorage.getItem('lists')) || [];
}

window.onload = carregaEMostraLista;