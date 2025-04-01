//URL da API do CRUD
const apiUrl = "https://crudcrud.com/api/988379aa4c1c4b079158b454f65fbbdd/servicos";

//Função pra pegar os serviços da API
function carregarServicos() {
    //Fazendo a requisição pra API
    fetch(apiUrl)
        .then(function(response) {
            //Verifica se a resposta tá ok
            if (!response.ok) {
                throw new Error("Erro ao carregar os serviços"); //Lança um erro se algo deu errado
            }
            return response.json(); //Converte a resposta pra JSON
        })
        .then(function(data) {
            //Pega a lista onde os serviços vão aparecer
            const listaServicos = document.getElementById("lista-servicos");
            listaServicos.innerHTML = ""; //Limpa a lista antes de adicionar os itens

            //Adiciona cada serviço como um item na lista
            data.forEach(function(servico) {
                const item = document.createElement("li"); //Cria um elemento <li>
                item.textContent = servico.nome; //Coloca o nome do serviço no item
                listaServicos.appendChild(item); //Adiciona o item na lista
            });
        })
        .catch(function(error) {
            //Mostra o erro no console
            console.error("Erro:", error);

            //Exibe uma mensagem de erro na lista
            const listaServicos = document.getElementById("lista-servicos");
            listaServicos.innerHTML = "<li>Erro ao carregar os serviços.</li>";
        });
}

//Quando a página carregar, chama a função pra pegar os serviços
window.onload = carregarServicos;