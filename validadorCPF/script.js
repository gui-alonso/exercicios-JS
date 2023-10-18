// Função para verificar se um CPF é válido
function verificarCPF() {
  // Obtém o valor do campo de CPF
  const cpf = document.getElementById("cpfInput").value;
  // Chama a função de validação de CPF
  const isValid = validarCPF(cpf);

  // Verifica se o CPF é válido e exibe um alerta correspondente
  if (isValid) {
      alert("CPF válido!");
  } else {
      alert("CPF inválido!");
  }
}

// Função para limitar o tamanho do CPF inserido pelo usuário
function limitarTamanhoCPF() {
  const cpfInput = document.getElementById("cpfInput");
  const maxLength = 11; // Define o comprimento máximo do CPF como 11 dígitos

  // Verifica se o CPF inserido é maior que o comprimento máximo permitido
  if (cpfInput.value.length > maxLength) {
      cpfInput.value = cpfInput.value.slice(0, maxLength); // Limita o tamanho do CPF
  }
}

// Função para limpar o campo de CPF
function limparCampo() {
  document.getElementById("cpfInput").value = ""; // Define o valor do campo como vazio
}

// Função para validar o CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos do CPF
  if (cpf.length !== 11) return false; // Retorna falso se o CPF não tiver 11 dígitos

  // Verifica se todos os dígitos do CPF são iguais e retorna falso se verdadeiro
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Calcula os dígitos verificadores do CPF e verifica se estão corretos
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

  // Retorna verdadeiro se os dígitos verificadores estiverem corretos, senão retorna falso
  return (parseInt(cpf.charAt(9)) === primeiroDigito && parseInt(cpf.charAt(10)) === segundoDigito);
}