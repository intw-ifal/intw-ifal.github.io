
function verifica(nome, lp_fav, periodo) {
    if (periodo == 0) {
        alert('O período precisa ser selecionado!');
        return false;
    }else{
        return alert('Aluno: '+nome+' \nLP Favorita: '+lp_fav+' \nPeríodo Atual: '+periodo);
    }
}
