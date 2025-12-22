const form = document.getElementById("formCadastro");
const nomeInut = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const tabelaBody = document.getElementById("tabelaBody");

//aremzenamento local ou array []
let cadastros = JSON.parse(localStorage.getItem("Cadastro")) || [];

//recarregar pagina
renderizarTabela();

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = nomeInut.value.trim;
    const idade = idadeInput.value.trim;

    //validação
if (nome === "" && idade === ""){
    alert("Por favor preencha os campos solicitados!")
    return;
}

const novoCadastro = {
    nome: nome,
    idade:idade
}

cadastros.push(novoCadastro);

//salvar no Local storage
localStorage.setItem("cadastro", Stringfy(cadastros));

renderizarTabelaenderizarTabela();
//limpa input
 nomeInut.value = "";
 idadeInput.value ="";
});

function renderizarTabela() {
    tabelaBody.innerHTML = "";

    cadastros.forEach(function(cadastro) {
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${cadastros.nome}</td>
        <td>${cadastros.idade}</td>
        `;

        tabelaBody.appendChild(tr);
    });
}
