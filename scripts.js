    function VerificarNome(nome, sobrenome,lp){ 
      
    if (lp == 0) {
        alert('Selecione uma linguagem!');
        return false;
    }else{
        return alert('Nome inserido pela Via externa: '+nome+' '+sobrenome+' selecionou a LP: '+lp);
    }
      
    }