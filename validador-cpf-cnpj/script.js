const tipoDocumento = document.getElementById("tipoDocumento");
const documentoInput = document.getElementById("documentoInput");

// Função para alternar entre CPF e CNPJ
tipoDocumento.addEventListener("change", function() {
    if (tipoDocumento.value === "cpf") {
        documentoInput.placeholder = "Digite o CPF";
        applyCPFMask();
    } else if (tipoDocumento.value === "cnpj") {
        documentoInput.placeholder = "Digite o CNPJ";
        applyCNPJMask();
    }
});

// Função para aplicar a máscara de CPF
function applyCPFMask() {
    documentoInput.removeEventListener("input", applyCNPJMask);
    documentoInput.addEventListener("input", function() {
        let value = documentoInput.value.replace(/\D/g, "");
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        documentoInput.value = value;
    });
}

// Função para aplicar a máscara de CNPJ
function applyCNPJMask() {
    documentoInput.removeEventListener("input", applyCPFMask);
    documentoInput.addEventListener("input", function() {
        let value = documentoInput.value.replace(/\D/g, "");
        if (value.length > 14) {
            value = value.slice(0, 14);
        }
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        documentoInput.value = value;
    });
}

// Inicialmente, aplicar a máscara de CPF
applyCPFMask();
// Incicialmente, aplicar a máscara de CNPJ
applyCNPJMask();