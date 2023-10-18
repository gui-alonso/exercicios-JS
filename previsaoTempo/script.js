// VARIÁVEIS => Um espaço na memória do computador para armazenar dados.
// FUNÇÃO => Um bloco de código que é executado quando é chamado.

// Chave de API para acesso ao OpenWeatherMap
let chave = "cebcd482eda57fa9a6714c1c2ba91885";

// Função que coloca os dados na tela
function colocarNaTela(dados) {
    console.log(dados);
    // Atualiza o conteúdo de elementos HTML com os dados obtidos da API
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

// Função assíncrona para buscar dados da cidade
async function buscarCidade(cidade) {
    try {
        // Faz uma solicitação à API do OpenWeatherMap para obter dados de temperatura e clima
        let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            cidade +
            "&appid=" +
            chave +
            "&lang=pt_br" +
            "&units=metric"
        ).then(resposta => resposta.json());

        // Chama a função para exibir os dados na tela
        colocarNaTela(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados da cidade:", erro);
        alert("Não foi possível buscar os dados da cidade. Verifique o nome da cidade e tente novamente.");
    }
}

// Função que é chamada quando o botão é clicado
function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}