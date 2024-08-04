function Bemvindo(nome) {
    return alert('Bem-vindo, saudações '+nome);    
}

function PreferenciaLinguagem(nome, linguagem) {
    var nome, lp='';
    if (nome==''){
        alert('É preciso inserir algum nome!');
        nome.focus();
        return false;
    }
    switch(linguagem) {
        case '1':
          lp = 'C';
          break;
        case '2':
            lp = 'Python';
          break;
        case '3':
            lp = 'JS';
          break;
        default:
        lp = 'NENHUMA!'
      }
      return alert('Linguagem selecionada por '+nome+' foi '+lp);
}

