function verificarCPF() {
    const cpf = document.getElementById("cpfInput").value;
    const isValid = validarCPF(cpf);
  
    if (isValid) {
      alert("CPF válido!");
    } else {
      alert("CPF inválido!");
    }
  }

  function limitarTamanhoCPF(){
    const cpfInput = document.getElementById("cpfInput");
    const maxLenght = 11;

    if(cpfInput.value.length > maxLenght) {
        cpfInput.value = cpfInput.length.slice(0, maxLenght);
    }
  }
  
  function limparCampo() {
    document.getElementById("cpfInput").value = "";
  }
  
  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
  
    if (/^(\d)\1{10}$/.test(cpf)) return false;
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito > 9) {
      primeiroDigito = 0;
    }
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito > 9) {
      segundoDigito = 0;
    }
  
    return (parseInt(cpf.charAt(9)) === primeiroDigito && parseInt(cpf.charAt(10)) === segundoDigito);
  }  