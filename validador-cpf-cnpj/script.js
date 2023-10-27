const tipoDocumento = document.getElementById("tipoDocumento");
const documentoInput = document.getElementById("documentoInput");
const isValid = validarDocumento(tipoDocumento);

// Função para aplicar a máscara de acordo com o tipo de documento
function applyMask() {
let value = documentoInput.value.replace(/\D/g, "");
if (tipoDocumento.value === "cpf") {
    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
} else if (tipoDocumento.value === "cnpj") {
    if (value.length > 14) {
        value = value.slice(0, 14);
    }
    value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}
documentoInput.value = value;
}

// Função para limpar o campo de CPF
function limparCampo() {
    document.getElementById("cpfInput").value = ""; // Define o valor do campo como vazio
  }

// Adiciona o evento de input para aplicar a máscara
documentoInput.addEventListener("input", applyMask);